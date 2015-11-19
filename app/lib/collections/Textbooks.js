textbook = "Textbook";  // avoid typos, this string occurs many times.

Textbook = new Mongo.Collection(textbook);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbook record.
   * @param doc The Textbook document.
   */
  addTextbook: function (doc) {
    check(doc, Textbook.simpleSchema());
    Textbook.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Textbook record.
   * @param doc The Textbook document.
   * @param docID It's ID.
   */
  editTextbook: function (doc, docID) {
    check(doc, Textbook.simpleSchema());
    Textbook.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(textbook, function () {
    return Textbook.find();
  });
}


/**
 * Create the schema for Textbook
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Textbook.attachSchema(new SimpleSchema({
  class: {
    label: "Class",
    type: String,
    optional: true,
    autoform: {
      group: textbook,
      placeholder: "Class using Book"
    }
  },
  title: {
    label: "Title",
    type: String,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "Title of Book"
    }
  },
  author: {
    label: "Author",
    type: String,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "Author of Book"
    }
  },
  isbn: {
    label: "ISBN",
    type: String,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "ISBN of Book"
    }
  },
  edition: {
    label: "Edition",
    type: String,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "Edition of book"
    }
  },
  publisher: {
    label: "Name",
    type: String,
    optional: true,
    autoform: {
      group: textbook,
      placeholder: "Publisher of Book"
    }
  },
  coverimage: {
    label: "Cover Image",
    type: String,
    optional: true,
    autoform: {
      group: textbook,
      placeholder: "Cover Image of Book"
    }
  },
  description: {
    label: "Description",
    type: String,
    optional: true,
    autoform: {
      group: textbook,
      placeholder: "Description of Book"
    }
  }
}));
