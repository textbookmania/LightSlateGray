/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Textbook"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/profile/personal/edit', {
  name: 'ProfileEdit'
});

Router.route('/profile/personal', {
  name: 'ProfilePage'
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

Router.route('/buyoffer', {
  name: 'BuyOffer'
});

Router.route('/selloffer', {
  name: 'SellOffer'
});

Router.route('/matching', {
  name: 'Matching'
});

Router.route('/help', {
  name: 'Help'
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Textbook.findOne(this.params._id); }
});
