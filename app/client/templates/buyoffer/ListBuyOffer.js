/**
 * Created by Micah on 11/24/2015.
 */

Template.ListBuyOffer.helpers({

    /**
     * @returns {*} All of the Textbook documents.
     */
    buyofferList: function () {
        return Offer.find();
    }
});

Template.ListBuyOffer.events({
    'click .delete': function (e) {
        e.preventDefault();
        if (confirm("Delete this buy offer?")) {
            var currentBuyOfferId = this._id;
            Meteor.call("deleteOffer", currentBuyOfferId);
            Router.go('ListBuyOffer');
        }
    }
});