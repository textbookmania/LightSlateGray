/**
 * Created by Micah on 12/9/2015.
 */
var buyOfferSeeds = [
  {book: "Operating System Concepts", condition: "Excellent", offer: 5, student: "rorya"},
  {book: "Ethics for the Information Age", condition: "Good", offer: 3, student: "rs7"},
  {book: "Programming Language Pragmatics", condition: "Bad", offer: 1, student: "micahtas"}
];

if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });
}