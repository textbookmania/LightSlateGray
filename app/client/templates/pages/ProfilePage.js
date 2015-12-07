/**
 * Created by Rory on 12/6/2015.
 */
Template.ProfilePage.helpers({
  ownProfile: function() {
    return this._id === Meteor.userId();
  }
});