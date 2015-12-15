/**
 * Created by Micah on 12/6/2015.
 */

/*Template.Matching.helpers({
  sellMatch: function() {
  var sellOffer = SellOffer.find({student: Meteor.user().username}).fetch();
  var sellMatches = [];
  var buyOfferMatches = [];
   _.each(sellOffer, function(rec){
    buyOfferMatches = buyOfferMatches.concat(BuyOffer.find({isbn10: rec.isbn10}));
   });
   _.each(buyOfferMatches, function(rec){
    rec.forEach(function(offers){
      if(moment(offers.expiration).isAfter()){
      sellMatches = sellMatches.concat(offers);
      }
    });
   });
  return sellMatches;
  },

 buyMatch: function(){
  var buyOffer = BuyOffer.find({student: Meteor.user().username}).fetch();
  var buyMatches = [];
  var sellOfferMatches = [];
  _.each(buyOffer, function(rec){
    sellOfferMatches = sellOfferMatches.concat(SellOffer.find({isbn10: rec.isbn10}));
  });
  _.each(sellOfferMatches, function(rec){
    rec.forEach(function(offers){
      if(moment(offers.expiration).isAfter()){
      buyMatches = buyMatches.concat(offers);
      }
    });
  });
 return buyMatches;
 }
 });*/



Template.Matching.helpers({
  sellMatch: function() {
    var sellOffers = SellOffer.find({student: Meteor.user().username}).fetch();
    var sellList = _.pluck(sellOffers, 'book');
    return BuyOffer.find({book: {$in: sellList}});
  },

  buyMatch: function(){
    var buyOffers = BuyOffer.find({student: Meteor.user().username}).fetch();
    var buyList = _.pluck(buyOffers, 'book');
    return SellOffer.find({book: {$in: buyList}});
  },
  formatDate: function (date) {
    return moment(date).format('ll, h:mm a');
  }
});
