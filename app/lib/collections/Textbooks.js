textbook = "Textbooks";  // avoid typos, this string occurs many times.

Textbook = new Mongo.Collection(stuff);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbook record.
   * @param doc The Textbook document.
   */
  addStuff: function(doc) {
    check(doc, Textbook.simpleSchema());
    Textbook.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Textbook record.
   * @param doc The Textbook document.
   * @param docID It's ID.
   */
  editStuff: function(doc, docID) {
    check(doc, Textbook.simpleSchema());
    Textbook.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(stuff, function () {
    return Textbook.find();
  });
}


/**
 * Create the schema for Textbook
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Textbook.attachSchema(new SimpleSchema({
  name: {
    label: "Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: stuff,
      placeholder: "Bicycle"
    }
  },
  quantity: {
    label: "Quantity",
    type: Number,
    optional: false,
    autoform: {
      group: stuff,
      placeholder: "3"
    }
  }
}));
