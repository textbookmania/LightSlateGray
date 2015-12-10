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
  selloffer: function () {
    return SellOffer.find({book: this.title.toString()});
  },
  buyoffer: function () {
    return BuyOffer.find({book: this.title.toString()});
  }
});