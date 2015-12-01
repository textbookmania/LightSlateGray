/**
 * Created by Micah on 11/30/2015.
 */

Template.ListSellOffer.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  sellofferList: function () {
    return SellOffer.find();
  }
});

Template.ListSellOffer.events({
  'click .delete': function (e) {
    e.preventDefault();
    if (confirm("Delete this sell offer?")) {
      var currentBuyOfferId = this._id;
      Meteor.call("deleteSellOffer", currentBuyOfferId);
      Router.go('ListSellOffer');
    }
  }
});