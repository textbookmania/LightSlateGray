/**
 * Created by Micah on 11/24/2015.
 */
buyoffer = "BuyOffer";  // avoid typos, this string occurs many times.

BuyOffer = new Mongo.Collection(buyoffer);

var expirationPeriod = 1;

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new BuyOffer record.
   * @param doc The BuyOffer document.
   */
  addBuyOffer: function (doc) {
    //doc.owner = Meteor.user().profile.name;
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a BuyOffer record.
   * @param doc The BuyOffer document.
   * @param docID It's ID.
   */
  editBuyOffer: function (doc, docID) {
    check(doc, BuyOffer.simpleSchema());
    BuyOffer.update({_id: docID}, doc);
  },

  deleteBuyOffer: function (docID) {
    BuyOffer.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(buyoffer, function () {
    return BuyOffer.find();
  });
}


/**
 * Create the schema for BuyOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
BuyOffer.attachSchema(new SimpleSchema({
  book: {
    type: String,
    optional: false,
    autoform: {
      group: buyoffer,
      afFieldInput: {
        firstOption: "Select Textbook"
      },
      options: function () {
        var textBook = _.pluck(Textbook.find({}, {fields: {'title': 1}}).fetch(), 'title');
        return _.map(textBook, function (value) {
          return {
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
      group: buyoffer,
      placeholder: "Offer For Book"
    }
  },
  expiration: {
    type: Date,
    label: "Expiration",
    optional: true,
    autoValue: function () {
      d = new Date();
      d.setDate(d.getDate() + expirationPeriod);
      return d;
    },
    autoform: {
      type: "hidden",
      group: buyoffer,
      placeholder: "Expiration Date and Time"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Bad'],
    optional: false,
    autoform: {
      group: buyoffer,
      afFieldInput: {
        firstOption: "Select Condition"
      },
      options: [
        {label: "Excellent", value: "Excellent"},
        {label: "Good", value: "Good"},
        {label: "Fair", value: "Fair"},
        {label: "Bad", value: "Bad"}
      ]
    }
  }
}));
