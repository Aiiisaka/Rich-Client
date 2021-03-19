import EmberRouter from '@ember/routing/router';
import config from 'projet-6/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('board');
  this.route('logout');
  this.route('section', function () {
    this.route('add');
    this.route('addProduct');
    this.route('delete', { path: 'section/delete/:section_id' });
    this.route('edit', { path: 'section/edit/:section_id' });
  });
  this.route('order', { path: 'order/:order_id' });
  this.route('abstractroute');
});
