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

Router.route('/edittextbooks/', {
  name: 'EditTextbook',
  path: '/edittextbooks/:_isbn',
  data: function() {
    return this.params._isbn;
  }
});


Router.route('/addbuyoffer', {
  name: 'AddBuyOffer'
});

Router.route('/listbuyoffer', {
  name: 'ListBuyOffer'
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

Router.route('/editbuyoffer/:_id', {
  name: 'EditBuyOffer',
  data: function () {
    return Offer.findOne(this.params._id);
  }
});
