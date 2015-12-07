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
    allowedValues: ['admin', 'user', 'tester', 'banned', 'role-manager'],
    optional: true
  }
});

Meteor.users.attachSchema(Schema.User);