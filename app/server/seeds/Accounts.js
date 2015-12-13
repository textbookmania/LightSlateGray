
/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {
  if (user) {
    if (user.hasOwnProperty("services") && user.services.hasOwnProperty("cas")) {
      var username = user.services.cas.id;
      if (username && _.contains(Meteor.settings.allowed_users, username)) {
        return true;
      }
    }
    else/* if (user.hasOwnProperty("username") && Meteor.settings.seed_test_users)*/ {
      if (_.contains(Meteor.settings.test_users, user.username)) {
        return true;
      }
    }
  }
  throw new Meteor.Error(403, "User not in the allowed list");
});

var accountSeeds = [
  {
    username: "testuserjohn",
    email: "testuserjohn@testhawaii.edu",
    password: "testpassword",
    profile: {
      firstName: "John",
      lastName: "Doe",
      shareEmail: true
    }
  },
  {
    username: "testusersally",
    password: "testpassword",
    email: "testusersally@testhawaii.edu",
    profile: {
      firstName: "Sally",
      lastName: "Sue",
      shareEmail: true
    }
  },
  {
    username: "testusergary",
    password: "testpassword",
    email: "testusergary@testhawaii.edu",
    profile: {
      firstName: "Gary",
      lastName: "Smith",
      shareEmail: true
    }
  },
  {
    username: "testuserbob",
    password: "testpassword",
    email: "testuserbob@testhawaii.edu",
    profile: {
      firstName: "Bob",
      lastName: "Bobert",
      shareEmail: true
    }
  },
  {
    username: "testusermary",
    password: "testpassword",
    email: "testusermary@testhawaii.edu",
    profile: {
      firstName: "Mary",
      lastName: "Magoo",
      shareEmail: true
    }
  }
];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Meteor.users.find().count() === 0 && Meteor.settings.seed_test_users) {
  _.each(accountSeeds,  function(user) {
    var newuser = Accounts.createUser(user);

    Roles.addUsersToRoles(newuser, "user");
  });
}
