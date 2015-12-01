/**
 * Created by Rory on 11/18/2015.
 */
Template.ProfileEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profileImage": $(e.target).find('[id=profile-image]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.firstName": $(e.target).find('[id=first-name]').val()}});
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.lastName": $(e.target).find('[id=last-name]').val()}});

    Meteor.call('changeEmail', $(e.target).find('[id=input-email]').val());
    Router.go('ProfilePage', data=Meteor.user());
  }
});