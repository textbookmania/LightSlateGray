/**
 * Created by Rory on 12/14/2015.
 */
Template.MessagesPage.helpers({
  getMessages: function () {
    if (Meteor.user()) {
      return Messages.find({owner:Meteor.user().username});
    }
  },
  getSender: function () {
    return {username:this.sender};
  },
  getTextbook: function () {
    return {_title:this.title};
  },
  isSellMessage: function () {
    if(this.offerType === "sell" && !this.acceptMessage) {
      return true;
    }
    else {
      return false;
    }
  },
  isAcceptSellMessage: function () {
    if(this.offerType === "sell" && this.acceptMessage) {
      return true;
    }
    else {
      return false;
    }
  },
  isBuyMessage: function () {
    if(this.offerType === "buy" && !this.acceptMessage) {
      return true;
    }
    else {
      return false;
    }
  },
  isAcceptBuyMessage: function () {
    if(this.offerType === "buy" && this.acceptMessage) {
      return true;
    }
    else {
      return false;
    }
  }
});