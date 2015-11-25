/**
 * Created by Micah on 11/24/2015.
 */
offer = "Offer";  // avoid typos, this string occurs many times.

Offer = new Mongo.Collection(offer);

Meteor.methods({
    /**
     * Invoked by AutoForm to add a new Offer record.
     * @param doc The Offer document.
     */
    addOffer: function (doc) {
        //doc.owner = Meteor.user().profile.name;
        check(doc, Offer.simpleSchema());
        Offer.insert(doc);
    },
    /**
     *
     * Invoked by AutoForm to update a Offer record.
     * @param doc The Offer document.
     * @param docID It's ID.
     */
    editOffer: function (doc, docID) {
        check(doc, Offer.simpleSchema());
        Offer.update({_id: docID}, doc);
    },

    deleteOffer: function(docID){
        Offer.remove(docID);
    }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
    Meteor.publish(offer, function () {
        return Offer.find();
    });
}


/**
 * Create the schema for Offer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Offer.attachSchema(new SimpleSchema({
    title: {
        label: "Title",
        type: String,
        optional: false,
        autoform: {
            group: offer,
            placeholder: "Title of Book"
        }
    },
    author: {
        label: "Author",
        type: String,
        optional: false,
        autoform: {
            group: offer,
            placeholder: "Author of Book"
        }
    },
    isbn: {
        label: "ISBN",
        type: String,
        optional: false,
        autoform: {
            group: offer,
            placeholder: "ISBN of Book"
        }
    },
    offer: {
        label: "Offer",
        type: Number,
        optional: false,
        autoform: {
            group: offer,
            placeholder: "Offer of Book"
        }
    },
    expiration: {
        label: "Expiration",
        type: String,
        optional: false,
        autoform: {
            group: offer,
            placeholder: "Expiration Date and Time"
        }
    },
    condition: {
        label: "Condition",
        type: String,
        optional: true,
        autoform: {
            group: offer,
            placeholder: "Excellent, Good, Fair or Bad"
        }
    }
}));
