/**
 * Created by Rory on 12/14/2015.
 */
Template.UserSellOffers.helpers({
  ownPage: function () {
    if(Meteor.user()) {
      return this._id === Meteor.userId();
    }
    else {
      return false;
    }
  },
  ownOffer: function () {
    if(Meteor.user()) {
      return this.student === Meteor.user().username;
    }
    else {
      return false;
    }
  },
  sellofferList: function () {
    return SellOffer.find({student: this.username});
  },
  formatDate: function (date) {
    var currDate = new Date();
    var newDate = moment(date).format('ll, h:mm a');
    if (date <= currDate) {
      return "EXPIRED" + newDate;
    }
    return newDate;
  }
});

Template.UserSellOffers.events({
  'click .delete': function (e) {
    e.preventDefault();
    if (confirm("Delete this sell offer?")) {
      var currentOfferId = this._id;
      Meteor.call("deleteSellOffer", currentOfferId);
    }
  }
});