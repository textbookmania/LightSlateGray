/**
 * Created by Rory on 12/6/2015.
 */
Template.RoleManager.events({
  'submit form': function(e) {
    e.preventDefault();
    if ($(e.target).find('[id=add-remove]').val() === "Add") {
      Meteor.call('addRole', $(e.target).find('[id=users-name]').val(), $(e.target).find('[id=role-name]').val());
    }
    else if ($(e.target).find('[id=add-remove]').val() === "Remove") {
      Meteor.call('removeRole', $(e.target).find('[id=users-name]').val(), $(e.target).find('[id=role-name]').val());
    }
    Router.go('Home');
  }
});