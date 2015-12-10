/**
 * Created by Micah on 12/9/2015.
 */
var sellOfferSeeds = [
  {book: "The Design of Everyday Things", condition: "Good", offer: 3, student: "micahtas"},
  {book: "The C Programming Language", condition: "Fair", offer: 2, student: "rorya"},
  {book: "Artificial Intelligence for Games", condition: "Bad", offer: 1, student: "rs7"}
];

if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}