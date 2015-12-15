/**
 * Created by Rory on 12/15/2015.
 */
Template.SellOfferAcceptMessageButton.helpers({
  noExistingAccept: function () {
    var message = {
      acceptMessage: true,
      offerType: "sell",
      owner: this.sender,
      sender: Meteor.user().username,
      title: this.title
    };

    return (Messages.find(message).fetch().length === 0);
  }
});

Template.SellOfferAcceptMessageButton.events({
  'submit .selloffer-accept-message': function(e) {
    e.preventDefault();
    if (this) {
      Meteor.call("confirmSellOfferMessage", this);
    }
    else {
      throw new Meteor.Error("No Sell offer passed.")
    }
  }
});