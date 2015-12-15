/**
 * Created by Rory on 12/14/2015.
 */
Template.SellOfferMessageButton.helpers({
  noExistingMessage: function () {
    var messageExistence = Messages.findOne({
      owner: this.student,
      title: this.book,
      sender: Meteor.user().username,
      offerType: "sell"
    });

    return !messageExistence;
  }
});

Template.SellOfferMessageButton.events({
  'submit .selloffer-message': function(e) {
    e.preventDefault();
    if (this) {
      Meteor.call("sendSellOfferMessage", this);
    }
    else {
      throw new Meteor.Error("No sell offer passed.")
    }
  }
});