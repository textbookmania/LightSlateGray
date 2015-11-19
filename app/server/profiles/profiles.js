/**
 * Created by Rory on 11/18/2015.
 */

Meteor.methods({
  changeEmail: function(email) {
    if (Accounts.findUserByEmail(email) === Meteor.user() || !Accounts.findUserByEmail(email)) {
      _.each(Meteor.user().emails, function(targetaddress){
          Accounts.removeEmail(Meteor.userId(), targetaddress.address)
      })
    }
    Accounts.addEmail(Meteor.userId(), email);
  }
});