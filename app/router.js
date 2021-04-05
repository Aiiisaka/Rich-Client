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
    this.route('add-product');
    this.route('delete', { path: 'section/delete/:section_id' });
    this.route('edit', { path: 'section/edit/:section_id' });
  });

  this.route('list-product', { path: 'list-product/:section_id' }, function () {
    this.route('add-produit');
    this.route('delete-produit', { path: 'product/delete/:product_id' });
    this.route('edit-produit', { path: 'product/edit/:product_id' });
  });

  this.route('my-order', function () {
    this.route('order', { path: 'prepare/:order_id' });
  });

  this.route('abstractroute');
});
