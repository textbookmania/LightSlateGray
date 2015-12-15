/**
 * Created by Micah on 12/9/2015.
 */

newDate = new Date();
newDate.setDate(newDate.getDate() + 1);

oldDate = new Date();
oldDate.setDate(newDate.getDate() - 1);

var buyOfferSeeds = [
  {book: "Operating System Concepts", condition: "Excellent", expiration: newDate, offer: 5, student: "rorya"},
  {book: "Ethics for the Information Age", condition: "Good", expiration: oldDate, offer: 3, student: "rs7"},
  {book: "Programming Language Pragmatics", condition: "Bad", expiration: oldDate, offer: 1, student: "micahtas"},
  {book: "Operating System Concepts", condition: "Fair", expiration: newDate, offer: 5, student: "micahtas"},
  {book: "Ethics for the Information Age", condition: "Excellent", expiration: oldDate, offer: 3, student: "rorya"},
  {book: "Programming Language Pragmatics", condition: "Good", expiration: oldDate, offer: 1, student: "rs7"},
  {book: "Java Concepts: Compatible with Java 5, 6 and 7", condition: "Good", expiration: oldDate, offer: 8, student: "rs7"},
  {book: "Discrete Mathematics and its Applications", condition: "Excellent", expiration: oldDate, offer: 10, student: "micahtas"},
  {book: "Introduction to Algorithms", condition: "Fair", expiration: newDate, offer: 3, student: "rorya"}
];

if (BuyOffer.find().count() === 0) {
  _.each(buyOfferSeeds,  function(buyOffer) {
    BuyOffer.insert(buyOffer, {getAutoValues: false});
  });
}