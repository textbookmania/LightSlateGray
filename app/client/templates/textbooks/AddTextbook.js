/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddTextbookForm: {
    /**
     * After successful form submission, go to the ListTextbook page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListTextbook');
    }
  }
});