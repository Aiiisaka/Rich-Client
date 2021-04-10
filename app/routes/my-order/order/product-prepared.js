import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ProductPreparedRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action prepareProductOrder(order) {
    order.save().then(() => this.transitionTo('order'));
  }
}
