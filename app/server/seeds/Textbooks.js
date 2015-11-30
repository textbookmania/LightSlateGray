/**
 * A list of Textbooks to pre-fill the Collection.
 * @type {*[]}
 */
var textbookSeeds = [
  {class: "ICS 110", title: "The Art of Computer Programming", author: "Donald E. Knuth", isbn: "978-0321751041", edition: "1", publisher: "Addison-Wesley Professional", condition: "Good", coverimage: "http://images.amazon.com/images/P/0321751043.01.LZ.jpg", description: ""},

  {class: "ICS 111", title: "Java Concepts", author: "Cay S. HorstMann", isbn: "9780470509470", edition: "6", publisher: "Wiley", condition: "Good", coverimage: "http://images.amazon.com/images/P/0470509473.01.LZ.jpg", description: ""},

  {class: "ICS 141", title: "Discrete Mathematics and its Applications", author: "Kenneth H. Rosen", isbn: "9780073383095", edition: "7", publisher: "McGraw-Hill Educatio", condition: "Good", coverimage: "http://images.amazon.com/images/P/0073383090.01.LZ.jpg", description: ""},

  {class: "ICS 211", title: "Data Structures: Abstraction and Design Using Java", author: "Elliot B. Koffman & Paul A. T. Wolfgang", isbn: "9780470128701", edition: "2", publisher: "Wiley", condition: "Good", coverimage: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg", description: ""},

  {class: "ICS 212", title: "The C Programming Language", author: "Brian W. Kernighan & Dennis M. Ritchie", isbn: "131103628", edition: "2", publisher: "Prentice Hall", condition: "Good", coverimage: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg", description: ""},

  {class: "ICS 212", title: "C++ Primer Plus", author: "Stephen Prata", isbn: "9780321776402", edition: "6", publisher: "Addison-Wesley Professional", condition: "Good", coverimage: "http://images.amazon.com/images/P/0321776402.01.LZ.jpg", description: ""},

  {class: "ICS 212", title: "The C Programming Language", author: "Brian W. Kernighan & Dennis M. Ritchie", isbn: "9780131103627", edition: "2", publisher: "Prentice Hall", condition: "Good", coverimage: "http://images.amazon.com/images/P/0131103628.01.LZ.jpg", description: ""},

  {class: "ICS 311", title: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson), Ronald L. Rivest & Clifford Stein", isbn: "9780262033848", edition: "3", publisher: "The MIT Press", condition: "Good", coverimage: "http://images.amazon.com/images/P/0262033844.01.LZ.jpg", description: ""},

  {class: "ICS 313", title: "Programming Language Pragmatics", author: "Michael L. Scott", isbn: "10: 0123745144", edition: "3", publisher: "Morgan Kaufmann", condition: "Good", coverimage: "http://images.amazon.com/images/P/0123745144.01.LZ.jpg", description: ""},

  {class: "ICS 313", title: "Programming Language Pragmatics", author: "Michael L. Scott", isbn: "13: 978-0123745149", edition: "3", publisher: "Morgan Kaufman", condition: "Good", coverimage: "http://images.amazon.com/images/P/0123745144.01.LZ.jpg", description: ""},

  {class: "ICS 313", title: "Land of Lisp: Learn to Program in Lisp", author: "Conrad Barski ", isbn: "978-1-59327-281-4", edition: "1", publisher: "No Starch Press", condition: "Good", coverimage: "http://images.amazon.com/images/P/1593272812.01.LZ.jpg", description: ""},

  {class: "ICS 321", title: "Database Systems: The Complete Book", author: "Elliot B. Koffman & Paul A. T. Wolfgang", isbn: "9780131873254", edition: "2", publisher: "Wiley", condition: "Good", coverimage: "http://images.amazon.com/images/P/0470128704.01.LZ.jpg", description: ""},

  {class: "ICS 331", title: "Data Structures: Abstraction and Design Using Java", author: "Hector Garcia-Molina, Jeffrey D. Ullman, & Jennifer Widom", isbn: "9781107027534", edition: "2", publisher: "Pearson", condition: "Good", coverimage: "http://images.amazon.com/images/P/0131873253.01.LZ.jpg", description: ""},

  {class: "ICS 332", title: "Operating System Concepts", author: "braham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "9781118063330", edition: "9", publisher: "Wiley", condition: "Good", coverimage: "http://images.amazon.com/images/P/1118063333.01.LZ.jpg", description: ""},

  {class: "ICS 332", title: "Operating System Concepts", author: "Abraham Silberschatz, Peter B. Galvin, & Greg Gagne", isbn: "9781118129388", edition: "9", publisher: "Wiley", condition: "Good", coverimage: "http://images.amazon.com/images/P/1118063333.01.LZ.jpg", description: ""},

  {class: "ICS 390", title: "Ethics for the Information Age", author: "Michael J. Quinn", isbn: "9780132855532", edition: "5", publisher: "Pearson", condition: "Good", coverimage: "http://images.amazon.com/images/P/0132855534.01.LZ.jpg", description: ""},

  {class: "ICS 419", title: "Emotional Design: Why We Love (or Hate) Everyday Things", author: "Don Norman ", isbn: "465051367", edition: "1", publisher: "Basic Books", condition: "Good", coverimage: "http://images.amazon.com/images/P/0465051367.01.LZ.jpg", description: ""},

  {class: "ICS 419", title: "The Design of Everyday Things", author: "Donald A. Norman ", isbn: "465067107", edition: "Reprint edition", publisher: "Basic Books", condition: "Good", coverimage: "http://images.amazon.com/images/P/0465067107.01.LZ.jpg", description: ""},

  {class: "ICS 462", title: "Presenting to Win: The Art of Telling Your Story, Updated and Expanded Edition", author: "Jerry Weissman", isbn: "9780137144174", edition: "1", publisher: "FT Press", condition: "Good", coverimage: "http://images.amazon.com/images/P/0137144172.01.LZ.jpg", description: ""},

  {class: "ICS 462", title: "Artificial Intelligence for Games", author: "Ian Millington & John Funge", isbn: "9780123747310", edition: "2", publisher: "CRC Press", condition: "Good", coverimage: "http://images.amazon.com/images/P/0123747317.01.LZ.jpg", description: ""},

];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Textbook.find().count() === 0) {
  _.each(textbookSeeds,  function(textbook) {
    Textbook.insert(textbook);
  });
}
