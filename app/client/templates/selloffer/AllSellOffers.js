/**
 * Created by Micah on 12/9/2015.
 */
Template.AllSellOffers.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  allsellofferList: function () {
    return SellOffer.find();
  }
});