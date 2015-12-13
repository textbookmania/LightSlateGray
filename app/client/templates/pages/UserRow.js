/**
 * Created by Rory on 12/13/2015.
 */
Template.UserRow.helpers({
  countBuyOffers: function() {
    return BuyOffer.find({student:this.username}).count();
  },
  countSellOffers: function() {
    return SellOffer.find({student:this.username}).count();
  }
});