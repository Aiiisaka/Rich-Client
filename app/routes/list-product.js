import Abstractroute from './abstractroute';
import { action } from '@ember/object';

export default class ListeProduitRoute extends Abstractroute {
  model(params) {
    var model = {};

    model.section = this.store.findRecord('section', params.section_id);
    model.products = this.store.findRecord('product', params.section_id);

    return model;
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
