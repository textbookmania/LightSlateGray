/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function () {
    return Meteor.subscribe("Textbook");
  },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("SellOffer"); },
  loadingTemplate: 'Loading'
});

Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("BuyOffer"); },
  loadingTemplate: 'Loading'
});

Router.onBeforeAction(function () {
  if (Roles.userIsInRole(Meteor.user(), "banned")) {
    this.render('Banned');
  } else {
    this.next();
  }
});

Router.route('/', {
  name: 'Home'
});

Router.route('/profile/edit', {
  name: 'ProfileEdit'
});

Router.route("/profile/:username", {
  name: 'ProfilePage',

  waitOn:function(){
    return [
      Meteor.subscribe("userProfile",this.params.username),
      Meteor.subscribe("Messages")
    ]

  },
  data:function(){
    var username=Router.current().params.username;
    return Meteor.users.findOne({
      username:username
    });
  }
});

Router.route("/users", {
  name: 'ListUsers',

  waitOn:function(){
    return Meteor.subscribe("userList");
  }
});

Router.route('/admin', {
  name: "AdminPage",

  waitOn:function() {
    return Meteor.subscribe("userList");
  }
});

Router.route('/rolemanager', {
  name: 'RoleManager'
});

Router.route('/textbooks', {
  name: 'ListTextbook'
});

Router.route('/addtextbooks', {
  name: 'AddTextbook'
});

Router.route('/edittextbooks/', {
  name: 'EditTextbook',
  path: '/edittextbooks/:_isbn',
  data: function() {
    return this.params._isbn;
  }
});

Router.route('/textbookoffers/', {
  name: 'TextbookOffer',
  path: '/textbookoffers/:_title',
  data: function() {
    return this.params._title;
  }
});

Router.route('offers', {
  name: 'Offers'
});

Router.route('/addbuyoffer', {
  name: 'AddBuyOffer'
});

Router.route('/allbuyoffer', {
  name: 'AllBuyOffers'
});

Router.route('/addselloffer', {
  name: 'AddSellOffer'
});

Router.route('/allselloffer', {
  name: 'AllSellOffers'
});

Router.route('/matching', {
  name: 'Matching'
});

Router.route('/help', {
  name: 'Help'
});

Router.route('/editbuyoffer/:_id', {
  name: 'EditBuyOffer',
  data: function() { return BuyOffer.findOne(this.params._id); }
});

Router.route('/editselloffer/:_id', {
  name: 'EditSellOffer',
  data: function() { return SellOffer.findOne(this.params._id); }
});