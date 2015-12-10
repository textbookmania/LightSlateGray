/**
 * Created by Micah on 12/9/2015.
 */
Template.AllBuyOffers.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  allbuyofferList: function () {
    return BuyOffer.find();
  }
});