/**
 * Created by Reed on 12/10/2015.
 */
Template.TextbookOffer.helpers({
  /**
   * @returns {*} All of the Textbook documents.
   */
  getTextbook: function () {
    return Textbook.findOne({title: this.toString()});
  },
  sellOffer: function () {
    return SellOffer.find({book: this.title.toString()});
  },
  buyOffer: function () {
    return BuyOffer.find({book: this.title.toString()});
  }
});

Template.TextbookOffer.events({
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