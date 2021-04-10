import Abstractroute from './abstractroute';
import { action } from '@ember/object';

export default class ListeProduitRoute extends Abstractroute {
  model(params) {
    return this.store.findRecord('section', params.section_id, {
      include: 'products',
    });
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
