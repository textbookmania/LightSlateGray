Template.ListTextbook.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  textbookList: function () {
    if (Router.current().params.query.textbook) {
      var title = Router.current().params.query.textbook;
      return Textbook.find({title: title});
    }
    else {
      return Textbook.find();
    }
  }
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
  },
  'submit form': function(e) {
    e.preventDefault();

    var title = $(e.target).find('[id=searchname]').val();
    var q = "textbook=".concat(title);
    Router.go("ListTextbook", {}, {query: q});
  }
});
