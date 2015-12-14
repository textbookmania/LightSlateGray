/**
 * Created by Micah on 11/24/2015.
 */

Template.YourBuyOffer.helpers({

    /**
     * @returns {*} All of the Textbook documents.
     */
    buyofferList: function () {
        return BuyOffer.find({student: Meteor.user().username});
    }
});

Template.YourBuyOffer.events({
    'click .delete': function (e) {
        e.preventDefault();
        if (confirm("Delete this buy offer?")) {
            var currentBuyOfferId = this._id;
            Meteor.call("deleteBuyOffer", currentBuyOfferId);
            Router.go('YourBuyOffer');
        }
    }
});