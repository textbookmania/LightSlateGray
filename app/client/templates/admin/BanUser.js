/**
 * Created by Rory on 12/12/2015.
 */
Template.BanUser.events({
  'submit .ban-user-form': function(e) {
    e.preventDefault();

    var target = $(e.target).find('[id=targetuser]').val();

    Meteor.call("banUser", target);
    var frm = document.getElementsByName('ban-user-form')[0];
    frm.reset();
    Router.go('AdminPage');
  }
});