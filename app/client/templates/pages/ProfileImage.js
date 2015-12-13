/**
 * Created by Rory on 12/12/2015.
 */
Template.ProfileImage.helpers({
  hasProfileImage: function() {
    if (this.profile.hasOwnProperty("profileImage")) {
      return true;
    }
    else {
      return false;
    }
  }
});