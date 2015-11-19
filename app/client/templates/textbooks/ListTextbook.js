Template.ListStuff.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  stuffList: function () {
    return Textbook.find();
  }
});