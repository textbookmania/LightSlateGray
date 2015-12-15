/**
 * Created by Rory on 12/14/2015.
 */
Template.MessagesPage.helpers({
  getMessages: function () {
    return Messages.find();
  }
});