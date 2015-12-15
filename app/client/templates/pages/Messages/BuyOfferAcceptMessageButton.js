/**
 * Created by Rory on 12/15/2015.
 */
Template.BuyOfferAcceptMessageButton.helpers({
  noExistingAccept: function () {
    var message = {
      acceptMessage: true,
      offerType: "buy",
      owner: this.sender,
      sender: Meteor.user().username,
      title: this.title
    };

    return (Messages.find(message).fetch().length === 0);
  }
});

Template.BuyOfferAcceptMessageButton.events({
  'submit .buyoffer-accept-message': function(e) {
    e.preventDefault();
    if (this) {
      Meteor.call("confirmBuyOfferMessage", this);
    }
    else {
      throw new Meteor.Error("No Buy offer passed.")
    }
  }
});