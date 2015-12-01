/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Textbook"); },
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

Router.route('/', {
  name: 'Home'
});

Router.route('/profile/personal/edit', {
  name: 'ProfileEdit'
});

Router.route("/profile/:username", {
  name: 'ProfilePage',

  waitOn:function(){
    return Meteor.subscribe("userProfile",this.params.username);
  },
  data:function(){
    var username=Router.current().params.username;
    return Meteor.users.findOne({
      username:username
    });
  }
});

Router.route('/students', {
  name: 'Students'
});

Router.route('/textbooks', {
  name: 'ListTextbook'
});

Router.route('/addtextbooks', {
  name: 'AddTextbook'
});

Router.route('/edittextbooks', {
  name: 'EditTextbook'
});

Router.route('/addbuyoffer', {
  name: 'AddBuyOffer'
});

Router.route('/listbuyoffer', {
  name: 'ListBuyOffer'
});

Router.route('/addselloffer', {
  name: 'AddSellOffer'
});

Router.route('/listselloffer', {
  name: 'ListSellOffer'
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