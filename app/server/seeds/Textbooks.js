/**
 * A list of Textbooks to pre-fill the Collection.
 * @type {*[]}
 */
var textbookSeeds = [
  {class: "ICS 110", title: "The Art of Computer Programming", author: "Donald E. Knuth", isbn13: "9780321751041", isbn10:"0321751043", edition: "1", publisher: "Addison-Wesley Professional", coverimage: "http://images.amazon.com/images/P/0321751043.01.LZ.jpg"},

  {class: "ICS 111", title: "Java Concepts: Compatible with Java 5, 6 and 7", author: "Cay S. HorstMann", isbn13: "9780470509470", isbn10: "0470509473", edition: "6", publisher: "Wiley", coverimage: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg"},

  {class: "ICS 141", title: "Discrete Mathematics and its Applications", author: "Kenneth H. Rosen", isbn13: "9780073383095", isbn10: "0073383090", edition: "7", publisher: "McGraw-Hill Educatio", coverimage: "http://images.amazon.com/images/P/0073383090.01.LZ.jpg"},

  {class: "ICS 211", title: "Data Structures: Abstraction and Design Using Java", author: "Elliot B. Koffman & Paul A. T. Wolfgang", isbn13: "9780470128701", isbn10: "0470128704", edition: "2", publisher: "Wiley", coverimage: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg"},

  {class: "ICS 212", title: "The C Programming Language", author: "Brian W. Kernighan & Dennis M. Ritchie", isbn13: "9780131103627", isbn10: "131103628", edition: "2", publisher: "Prentice Hall", coverimage: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg"},

  {class: "ICS 212", title: "C++ Primer Plus", author: "Stephen Prata", isbn13: "9780321776402", isbn10: "0321776402", edition: "6", publisher: "Addison-Wesley Professional", coverimage: "http://images.amazon.com/images/P/0321776402.01.LZ.jpg"},

  {class: "ICS 311", title: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson), Ronald L. Rivest & Clifford Stein", isbn13: "9780262033848", isbn10: "0262033844", edition: "3", publisher: "The MIT Press", coverimage: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg"},

  {class: "ICS 313", title: "Programming Language Pragmatics", author: "Michael L. Scott", isbn13: "9780123745149", isbn10: "0123745144", edition: "3", publisher: "Morgan Kaufmann", coverimage: "http://images.amazon.com/images/P/0123745144.01.LZ.jpg"},

  {class: "ICS 313", title: "Land of Lisp: Learn to Program in Lisp", author: "Conrad Barski ", isbn13: "9781593272814", isbn10: "1593272812", edition: "1", publisher: "No Starch Press", coverimage: "http://images.amazon.com/images/P/1593272812.01.LZ.jpg"},

  {class: "ICS 321", title: "Database Systems: The Complete Book", author: "Elliot B. Koffman & Paul A. T. Wolfgang", isbn13: "9780131873254", isbn10: "0470128704", edition: "2", publisher: "Wiley", coverimage: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg"},

  {class: "ICS 331", title: "Data Structures: Abstraction and Design Using Java", author: "Hector Garcia-Molina, Jeffrey D. Ullman, & Jennifer Widom", isbn13: "9781107027534", isbn10: "0131873253", edition: "2", publisher: "Pearson", coverimage: "http://images.amazon.com/images/P/0131873253.01.LZ.jpg"},

  {class: "ICS 332", title: "Operating System Concepts", author: "braham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn13: "9781118063330", isbn10: "1118063333", edition: "9", publisher: "Wiley", coverimage: "http://images.amazon.com/images/P/1118063333.01.LZ.jpg"},

  {class: "ICS 390", title: "Ethics for the Information Age", author: "Michael J. Quinn", isbn13: "9780132855532", isbn10: "0132855534", edition: "5", publisher: "Pearson", coverimage: "http://images.amazon.com/images/P/0132855534.01.LZ.jpg"},

  {class: "ICS 419", title: "Emotional Design: Why We Love (or Hate) Everyday Things", author: "Don Norman ", isbn13: "9780465051366", isbn10: "0465051367", edition: "1", publisher: "Basic Books", coverimage: "http://images.amazon.com/images/P/0465051367.01.LZ.jpg"},

  {class: "ICS 419", title: "The Design of Everyday Things", author: "Donald A. Norman ", isbn13: "9780465067107", isbn10: "0465067107", edition: "Reprint edition", publisher: "Basic Books", coverimage: "http://images.amazon.com/images/P/0465067107.01.LZ.jpg"},

  {class: "ICS 462", title: "Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition", author: "Jerry Weissman", isbn13: "9780137144174", isbn10: "0137144172", edition: "1", publisher: "FT Press", coverimage: "http://images.amazon.com/images/P/0137144172.01.LZ.jpg"},

  {class: "ICS 462", title: "Artificial Intelligence for Games", author: "Ian Millington & John Funge", isbn13: "9780123747310", isbn10: "0123747317", edition: "2", publisher: "CRC Press", coverimage: "http://images.amazon.com/images/P/0123747317.01.LZ.jpg"},

];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Textbook.find().count() === 0) {
  _.each(textbookSeeds,  function(textbook) {
    Textbook.insert(textbook);
  });
}
