/**
 * Created by Rory on 11/18/2015.
 */
AutoForm.hooks({
  EditProfileForm: {
    /**
     * After successful form submission, go to the ListStuff page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ProfilePage', data=Meteor.user());
    }
  }
});

Template.ProfileEdit.helpers({
  users: function () {
    return Meteor.users;
  },
  userSchema: function () {
    return Schema.User;
  }
});