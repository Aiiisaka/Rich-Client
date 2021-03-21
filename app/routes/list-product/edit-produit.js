import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ProduitEditProduitRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action editProduct(section) {
    section.save().then(() => this.transitionTo('product'));
  }
}
