import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app');
  this.route('me');
  this.route('resume');
  this.route('contact');
  this.route('boot');
  this.route('marvel');
  this.route('netflix');
  this.route('tshirt');
});

export default Router;
