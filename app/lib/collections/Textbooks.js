textbook = "Textbook";  // avoid typos, this string occurs many times.

Textbook = new Mongo.Collection(textbook);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbook record.
   * @param doc The Textbook document.
   */
  addTextbook: function (doc) {
    if (Roles.userIsInRole(Meteor.user(), "admin") === false) {
      throw new Meteor.Error(403, "Permission Denied");
    }
    check(doc, Textbook.simpleSchema());

    var image = "http://images.amazon.com/images/P/" + doc.isbn10 + ".01.LZ.jpg";
    doc.coverimage = image;
    if (Meteor.call("checkTextbook", doc) === false) {
      throw new Meteor.Error("Invalid Add");
    }
    else {
      Textbook.insert(doc);
    }

  },
  /**
   *
   * Invoked by AutoForm to update a Textbook record.
   * @param doc The Textbook document.
   * @param docID It's ID.
   */
  editTextbook: function (doc, docID) {
    if (_.contains(Meteor.user().roles, "admin") === false) {
      throw new Meteor.Error(403, "Permission Denied");
    }

    var image = "http://images.amazon.com/images/P/" + doc.$set.isbn10 + ".01.LZ.jpg";
    var pre = Textbook.findOne({_id: docID});
    
    doc.$set.coverimage = image;

    if(doc.$set.title != pre.title) {
      if(Meteor.call("checkTitle", doc.$set) === false) {
        throw new Meteor.Error("Invalid Edit");
      }
    }

    if(doc.$set.isbn13 != pre.isbn13) {
      if(Meteor.call("checkISBN13", doc.$set) === false) {
        throw new Meteor.Error("Invalid Edit");
      }
    }

    if(doc.$set.isbn10 != pre.isbn10) {
      if(Meteor.call("checkISBN10", doc.$set) === false) {
        throw new Meteor.Error("Invalid Edit");
      }
    }

    Textbook.update({_id: docID}, doc);


  },
  /**
   * This checks that the Textbook is valid to add or edit.
   * @param doc The Textbook documents.
   * @return valid The check.
   */
  checkTextbook: function (doc) {
    if (_.contains(Meteor.user().roles, "admin") === false) {
      throw new Meteor.Error(403, "Permission Denied");
    }

    var valid = true;
    if(Meteor.call("checkTitle", doc) === false) {
      valid = false;
    }
    if(Meteor.call("checkISBN13", doc) === false) {
      valid = false;
    }
    if(Meteor.call("checkISBN10", doc) === false) {
      valid = false;
    }

    return valid;
  },
  checkTitle: function(doc) {
    if (_.findWhere(Textbook.find().fetch(), {title: doc.title})) {
      if (Meteor.isClient) {
        alert("Book Title exists");
      }
      return false;
    }
    return true;
  },
  checkISBN13: function(doc) {
    if (_.findWhere(Textbook.find().fetch(), {isbn13: doc.isbn13})) {
      if (Meteor.isClient) {
        alert("Book ISBN13 exists");
      }
      return false;
    }
    return true;
  },
  checkISBN10: function(doc) {
    if (_.findWhere(Textbook.find().fetch(), {isbn10: doc.isbn10})) {
      if (Meteor.isClient) {
        alert("Book ISBN10 exists");
      }
      return false;
    }
    return true;
  },
  deleteTextbook: function (docID) {
    Textbook.remove(docID);
  },
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
  isbn10: {
    label: "ISBN10",
    type: String,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "ISBN10 of Book ex. XXXXXXXXXX"
    }
  },
  isbn13: {
    label: "ISBN13",
    type: String,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "ISBN13 of Book ex. XXXXXXXXXXXXX"
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
    label: "Publisher",
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
  }
}));
