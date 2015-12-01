/**
 * Code modified from user saimeunt's code on stackoverflow from http://stackoverflow.com/a/26086406/5616465
 */
Meteor.publish("userProfile",function(username){
  // try to find the user by username
  var user = Meteor.users.findOne({
    username:username
  });
  // if we can't find it, quit
  if(!user){
    return;
  }
  // if the user we want to display the profile is the currently logged in user...
  if(this.userId==user._id){
    // then we return the corresponding full document via a cursor
    return Meteor.users.find(this.userId);
  }
  else{
    // if we are viewing only the public part, strip the "profile"
    // property from the fetched document, you might want to
    // set only a nested property of the profile as private
    // instead of the whole property

    return Meteor.users.find(user._id,{
      fields:{
        "username":1,
        "emails":1,
        "profile":1
      }
    });
  }
});

Schema = {};

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    label: "First name",
    optional: true
  },
  lastName: {
    type: String,
    label: "Last name",
    optional: true
  },
  profileImage: {
    type: String,
    label: "Profile image url",
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  shareEmail: {
    type: Boolean,
    label: "Share email with others?",
    defaultValue: false,
    optional: true
  }
});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  emails: {
    type: Array,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    label: "name@domain.com",
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 2: [String] type
  // If you are sure you will never need to use role groups, then
  // you can specify [String] as the type
  roles: {
    type: [String],
    allowedValues: ['admin', 'user', 'tester', 'banned'],
    optional: true
  }
});

Meteor.users.attachSchema(Schema.User);