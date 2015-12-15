/**
 * Created by Rory on 12/14/2015.
 */
Meteor.publish("Messages", function () {
  if (Meteor.user()) {
    return Messages.find({})
  }
});

Meteor.methods({
  sendBuyOfferMessage: function (offer) {
    var student = Meteor.user().username;

    var message = {
      owner: offer.student,
      title: offer.book,
      offer: offer.offer,
      sender: student,
      email: Meteor.user().emails[0].address,
      offerType: "buy",
      acceptMessage: false,
      viewed: false
    };

    check(message, Messages.simpleSchema());

    if (!Messages.findOne(message)) {
      Messages.insert(message);
    }
    else {
      throw new Meteor.Error("Message already exists.");
    }
  },
  sendSellOfferMessage: function (offer) {
    var student = Meteor.user().username;

    var message = {
      owner: offer.student,
      title: offer.book,
      offer: offer.offer,
      sender: student,
      email: Meteor.user().emails[0].address,
      offerType: "sell",
      acceptMessage: false,
      viewed: false
    };

    check(message, Messages.simpleSchema());

    if (!Messages.findOne(message)) {
      Messages.insert(message);
    }
    else {
      throw new Meteor.Error("Message already exists.");
    }
  },
  confirmBuyOfferMessage: function (messageinfo) {
    var student = Meteor.user().username;

    var message = {
      owner: messageinfo.sender,
      title: messageinfo.book,
      offer: messageinfo.offer,
      sender: student,
      email: Meteor.user().emails[0].address,
      offerType: "buy",
      acceptMessage: true,
      viewed: false
    };

    check(message, Messages.simpleSchema());

    if (!Messages.findOne(message)) {
      Messages.insert(message);
    }
    else {
      throw new Meteor.Error("Message already exists.");
    }
  },
  confirmSellOfferMessage: function(messageinfo) {
    var student = Meteor.user().username;

    var message = {
      owner: messageinfo.sender,
      title: messageinfo.book,
      offer: messageinfo.offer,
      sender: student,
      email: Meteor.user().emails[0].address,
      offerType: "buy",
      acceptMessage: true,
      viewed: false
    };

    check(message, Messages.simpleSchema());

    if (!Messages.findOne(message)) {
      Messages.insert(message);
    }
    else {
      throw new Meteor.Error("Message already exists.");
    }
  }
});