/**
 * Created by Rory on 12/14/2015.
 */
Meteor.publish("Messages", function () {
  if (this.userId) {
    var user = Meteor.users.find({_id: this.userId}).fetch();
    return Messages.find({$or: [{owner:user[0].username}, {sender:user[0].username}]});
  }
});

Meteor.publish("UnreadMessages", function () {
  if (this.userId) {
    var user = Meteor.users.find({_id: this.userId}).fetch();
    return Messages.find({owner:user[0].username, viewed:false});
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

    if (Messages.findOne({
        owner: message.owner,
        title: message.title,
        sender: message.sender,
        offerType: message.offerType,
        acceptMessage: message.acceptMessage})) {
      throw new Meteor.Error("Message already exists.");
    }
    else {
      Messages.insert(message);
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

    if (Messages.findOne({
        owner: message.owner,
        title: message.title,
        sender: message.sender,
        offerType: message.offerType,
        acceptMessage: message.acceptMessage})) {
      throw new Meteor.Error("Message already exists.");
    }
    else {
      Messages.insert(message);
    }
  },
  confirmBuyOfferMessage: function (messageinfo) {
    var student = Meteor.user().username;

    var message = {
      owner: messageinfo.sender,
      title: messageinfo.title,
      offer: messageinfo.offer,
      sender: student,
      email: Meteor.user().emails[0].address,
      offerType: "buy",
      acceptMessage: true,
      viewed: false
    };

    check(message, Messages.simpleSchema());

    if (Messages.findOne({
        owner: message.owner,
        title: message.title,
        sender: message.sender,
        offerType: message.offerType,
        acceptMessage: message.acceptMessage})) {
      throw new Meteor.Error("Message already exists.");
    }
    else {
      Messages.insert(message);
    }
  },
  confirmSellOfferMessage: function(messageinfo) {
    var student = Meteor.user().username;

    var message = {
      owner: messageinfo.sender,
      title: messageinfo.title,
      offer: messageinfo.offer,
      sender: student,
      email: Meteor.user().emails[0].address,
      offerType: "sell",
      acceptMessage: true,
      viewed: false
    };

    check(message, Messages.simpleSchema());

    if (Messages.findOne({
        owner: message.owner,
        title: message.title,
        sender: message.sender,
        offerType: message.offerType,
        acceptMessage: message.acceptMessage})) {
      throw new Meteor.Error("Message already exists.");
    }
    else {
      Messages.insert(message);
    }
  },
  markViewed: function() {
    var username = Meteor.user().username;

    Messages.find({owner: username, viewed: false})
      .forEach(function(message){
        Messages.update({_id: message._id},
          {$set: { viewed: true }}
        );
      });
  }
});