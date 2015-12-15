/**
 * Created by Rory on 12/15/2015.
 */
Template.Header.helpers({
  unreadMessages: function () {
    Meteor.subscribe("SellOffer");
    return Messages.find({owner:Meteor.user().username, viewed:false}).count();
  }
});