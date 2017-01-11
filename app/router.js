import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('me');
  this.route('resume');
  this.route('projectA');
  this.route('project-b');
});

export default Router;
