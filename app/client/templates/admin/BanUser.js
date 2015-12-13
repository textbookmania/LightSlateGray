/**
 * Created by Rory on 12/12/2015.
 */
Template.BanUser.events({
  'submit form': function(e) {

    var target = $(e.target).find('[id=targetuser]').val();

    Meteor.call("banUser", target);

    Router.go('AdminPage');
  }
});