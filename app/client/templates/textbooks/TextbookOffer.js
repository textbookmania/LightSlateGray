/**
 * Created by Reed on 12/10/2015.
 */
Template.ListTextbook.helpers({

  /**
   * @returns {*} All of the Textbook documents.
   */
  textbookList: function () {
    return Textbook.find();
  },
});