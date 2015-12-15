Template.ListTextbook.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  textbookList: function () {
    return Textbook.find();
  },
});

Template.ListTextbook.events({
  'click .delete': function (e) {
    if (_.contains(Meteor.user().roles, "admin") === false) {
      throw new Meteor.Error(403, "Permission Denied");
    }
    e.preventDefault();
    if (confirm("Delete Textbook?")) {
      var currentTextbookId = this._id;
      Meteor.call("deleteTextbook", currentTextbookId);
      Router.go('ListTextbook');
    }
  }
});
