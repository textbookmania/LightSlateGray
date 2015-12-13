/**
 * Created by Rory on 12/13/2015.
 */
Template.ListBanned.helpers({
  getBanned: function () {
    return Meteor.users.find({roles: 'banned'});
  }
});

Template.ListBanned.events({
  'submit .unban-user': function(e) {
    e.preventDefault();
    if (confirm("Unban " + this.username + "?")) {
      Meteor.call("unbanUser", this.username);
    }
  }
});