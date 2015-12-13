/**
 * Created by Rory on 12/13/2015.
 */
Template.UserRow.helper({
  countBuyOffers: function() {
    return BuyOffer.find(this.username).count();
  },
  countSellOffers: function() {
    return SellOffer.find(this.username).count();
  }
});