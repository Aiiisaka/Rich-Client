import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ProduitAddProduitRoute extends Route {
  model(params) {
    return this.store.findRecord('section', params.section_id, {
      include: 'products',
    });
  }

  @action addProduct(product) {
    let newProduct = this.store.createRecord('product', product);
    newProduct.save().then(() => this.transitionTo('product'));
  }
}
