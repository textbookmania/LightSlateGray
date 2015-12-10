/**
 * Created by Rory on 12/9/2015.
 */
Template.ListUsers.helpers({
  getUsers: function () {
    return Meteor.users.find();
  }
});