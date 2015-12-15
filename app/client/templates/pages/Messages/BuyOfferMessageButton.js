/**
 * Created by Rory on 12/15/2015.
 */
Template.BuyOfferMessageButton.helpers({
  noExistingMessage: function () {
    var messageExistence = Messages.findOne({
      owner: this.student,
      title: this.book,
      sender: Meteor.user().username,
      offerType: "buy"
    });

    return !messageExistence;
  }
});

Template.BuyOfferMessageButton.events({
  'submit .buyoffer-message': function(e) {
    e.preventDefault();
    if (this) {
      Meteor.call("sendBuyOfferMessage", this);
    }
    else {
      throw new Meteor.Error("No buy offer passed.")
    }
  }
});