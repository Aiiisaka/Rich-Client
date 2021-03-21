import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ProduitDeleteProduitRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action deleteProduct(section) {
    section.deleteRecord();
    section.save().then(() => this.transitionTo('product'));
  }
}
