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