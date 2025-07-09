import EmberRouter from '@ember/routing/router';
import config from 'frontend-socials/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('register');
  this.route('login');
  this.route('users');
  this.route('user-new', { path: '/users/new' });
  this.route('user-details', { path: '/users/:user_id' });
  this.route('user-edit', { path: '/users/:user_id/edit' });
});
