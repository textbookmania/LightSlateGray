/**
 * Created by Rory on 12/9/2015.
 */
Template.ListUsers.helpers({
  getUsers: function () {
    if (Router.current().params.query.user) {
      var name = Router.current().params.query.user;
      return Meteor.users.find({username:name});
    }
    else {
      return Meteor.users.find();
    }
  }
});

Template.ListUsers.events({
  'submit form': function(e) {
    e.preventDefault();

    var name = $(e.target).find('[id=searchname]').val();
    var q = "user=".concat(name);
    Router.go("ListUsers", {}, {query: q});
  }
});