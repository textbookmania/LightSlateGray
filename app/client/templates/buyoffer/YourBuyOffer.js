/**
 * Created by Micah on 11/24/2015.
 */

Template.YourBuyOffer.helpers({

    /**
     * @returns {*} All of the Textbook documents.
     */
    buyofferList: function () {
        return BuyOffer.find({student: Meteor.user().username});
    },
    formatDate: function (date) {
        var currDate = new Date();
        var newDate = moment(date).format('ll, h:mm a');
        if (date <= currDate) {
            newDate = newDate.fontcolor("red");
            return newDate;
        }
        return newDate;
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