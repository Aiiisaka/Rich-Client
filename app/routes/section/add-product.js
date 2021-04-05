import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionAddProductRoute extends Route {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
    });
  }

  @action addProduct(product) {
    let newProduct = this.store.createRecord('product', product);
    newProduct.save().then(() => this.transitionTo('section'));
  }
}
