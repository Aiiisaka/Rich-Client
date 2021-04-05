import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionAddProductRoute extends Route {
  model() {
    return {};
  }

  @action addProduct(product) {
    let newProduct = this.store.createRecord('product', product);
    newProduct.save().then(() => this.transitionTo('section'));
  }
}
