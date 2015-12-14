/**
 * Created by Micah on 11/30/2015.
 */
/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditSellOfferForm: {
    /**
     * After successful form submission, go to the ListSellOffer page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('YourSellOffer');
    }
  }
});