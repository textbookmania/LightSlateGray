/**
 * Created by Micah on 12/6/2015.
 */
/*
Template.Matching.helpers({
  sellMatch: function() {
  var sellOffer = SellOffer.find({student: Meteor.user().profile.name}).fetch();
   var sellMatches = [];
   var buyOfferMatches = [];
   _.each(sellOffer, function(rec){
    buyOfferMatches = buyOfferMatches.concat(BuyOffer.find({book: rec.book}));
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
  var buyOffer = BuyOffer.find({student: Meteor.user().profile.name}).fetch();
  var buyMatches = [];
  var sellOfferMatches = [];
  _.each(buyOffer, function(rec){
    sellOfferMatches = sellOfferMatches.concat(SellOffer.find({book: rec.book}));
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
    var sellOffer = SellOffer.find({student: Meteor.user().profile.name}).fetch();
    var sellMatches = [];
    //var buyOfferMatches = [];
    _.each(sellOffer, function(rec){
      sellMatches = sellMatches.concat(BuyOffer.find({book: rec.book}));
    });
    return sellMatches;
  },

  buyMatch: function(){
    var buyOffer = BuyOffer.find({student: Meteor.user().profile.name}).fetch();
    var buyMatches = [];
    //var sellOfferMatches = [];
    _.each(buyOffer, function(rec){
      buyMatches = buyMatches.concat(SellOffer.find({book: rec.book}));
    });
    return buyMatches;
  }
});
