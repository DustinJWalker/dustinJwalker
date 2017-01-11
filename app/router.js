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
  this.route('projectA');
  this.route('project-b');
  this.route('project-c');
  this.route('project-d');
});

export default Router;
