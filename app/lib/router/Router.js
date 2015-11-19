/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});
Router.route('/profile/personal/edit', {
  name: 'ProfileEdit'
});

Router.route('/textbooks', {
  name: 'Textbook'
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
  data: function() { return Stuff.findOne(this.params._id); }
});
