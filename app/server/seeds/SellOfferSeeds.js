/**
 * Created by Micah on 12/9/2015.
 */

newDate = new Date();
newDate.setDate(newDate.getDate() + 1);

oldDate = new Date();
oldDate.setDate(newDate.getDate() - 1);

var sellOfferSeeds = [
  {book: "The Design of Everyday Things", condition: "Good", expiration: newDate, offer: 3, student: "micahtas"},
  {book: "The C Programming Language", condition: "Fair", expiration: newDate, offer: 2, student: "rorya"},
  {book: "Artificial Intelligence for Games", condition: "Bad", expiration: oldDate, offer: 1, student: "rs7"},
  {book: "The Design of Everyday Things", condition: "Excellent", expiration: newDate, offer: 3, student: "rs7"},
  {book: "The C Programming Language", condition: "Bad", expiration: newDate, offer: 2, student: "micahtas"},
  {book: "Artificial Intelligence for Games", condition: "Fair", expiration: oldDate, offer: 1, student: "rorya"},
  {book: "Java Concepts: Compatible with Java 5, 6 and 7", condition: "Fair", expiration: oldDate, offer: 1, student: "rorya"},
  {book: "Discrete Mathematics and its Applications", condition: "Good", expiration: oldDate, offer: 3, student: "rs7"},
  {book: "Introduction to Algorithms", condition: "Excellent", expiration: newDate, offer: 10, student: "micahtas"}
];

if (SellOffer.find().count() === 0) {
  _.each(sellOfferSeeds,  function(sellOffer) {
    SellOffer.insert(sellOffer, {getAutoValues: false});
  });
}