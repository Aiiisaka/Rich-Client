import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class ListeProduitRoute extends Route {
  model() {
    return {};
  }

  @action section() {
    this.transitionTo('section');
  }

  @action newProduct() {
    this.transitionTo('list-product.add-produit');
  }

  @action editProduct() {
    this.transitionTo('list-product.edit-produit');
  }

  @action deleteProduct() {
    this.transitionTo('list-product.delete-produit');
  }
}
