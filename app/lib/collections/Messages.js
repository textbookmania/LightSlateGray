/**
 * Created by Rory on 12/14/2015.
 */
Messages = new Mongo.Collection("Messages");

Messages.attachSchema(new SimpleSchema({
  owner: {
    label: "Owner",
    type: String,
    optional: false
  },
  title: {
    label: "Title",
    type: String,
    optional: false
  },
  offer: {
    label: "Offer",
    type: Number,
    optional: false
  },
  sender: {
    label: "Student",
    type: String,
    optional: false
  },
  email: {
    label: "Email",
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: false
  },
  offerType: {
    label: "Offer Type",
    type: String,
    allowedValues: ["buy", "sell"],
    optional: false
  },
  acceptMessage: {
    type: Boolean,
    optional: false
  },
  viewed: {
    label: "Viewed",
    type: Boolean,
    optional: false,
    defaultValue: false
  }
}));