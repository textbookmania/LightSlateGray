/**
 * Created by Micah on 11/30/2015.
 */
selloffer = "SellOffer";  // avoid typos, this string occurs many times.

SellOffer = new Mongo.Collection(selloffer);

var expirationPeriod = 90;

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new SellOffer record.
   * @param doc The SellOffer document.
   */
  addSellOffer: function (doc) {
    doc.student = Meteor.user().username;
    if (_.findWhere(BuyOffer.find().fetch(), {student: doc.student, book: doc.book}) || _.findWhere(SellOffer.find().fetch(), {student: doc.student, book: doc.book}) ) {
      if (Meteor.isClient) {
        alert("You already have a sell offer or buy offer for that book.");
      }
      return;
    }
    check(doc, SellOffer.simpleSchema());
    SellOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a SellOffer record.
   * @param doc The SellOffer document.
   * @param docID It's ID.
   */
  editSellOffer: function (doc, docID) {
    check(doc, SellOffer.simpleSchema());
    SellOffer.update({_id: docID}, doc);
  },

  deleteSellOffer: function(docID){
    SellOffer.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(selloffer, function () {
    return SellOffer.find();
  });
}


/**
 * Create the schema for SellOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
SellOffer.attachSchema(new SimpleSchema({
  book: {
    type: String,
    autoform: {
      group: selloffer,
      afFieldInput: {
        firstOption: "Select Textbook"
      },
      options:function(){
        var textBook = _.pluck(Textbook.find({}, {fields:{'title':1}}).fetch(), 'title');
        return _.map(textBook, function(value){
          return{
            label: value,
            value: value
          }
        })
      }
    }
  },
  offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: selloffer,
      placeholder: "Offer For Book"
    }
  },
  expiration: {
    type: Date,
    label: "Expiration",
    optional: true,
    autoValue: function(){
      var d = new Date();
      d.setDate(d.getDate() + expirationPeriod);
      return d;
    },
    autoform: {
      type: "hidden",
      group: selloffer,
      placeholder: "Expiration Date and Time"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Bad'],
    optional: false,
    autoform: {
      group: selloffer,
      afFieldInput:{
        firstOption: "Select Condition"
      },
      options: [
        {label: "Excellent", value: "Excellent"},
        {label: "Good", value: "Good"},
        {label: "Fair", value: "Fair"},
        {label: "Bad", value: "Bad"}
      ]
    }
  },
  student: {
    label: "Student",
    type: String,
    optional: true,
    autoform: {
      type: "hidden",
      group: selloffer,
      placeholder: "Student"
    }
  }
}));
