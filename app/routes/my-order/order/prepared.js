import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class PreparedRoute extends Route {
  model(params) {
    return this.store.findRecord('order', params.order_id);
  }

  @action prepareOrder(order) {
    order.save().then(() => this.transitionTo('order'));
  }
}
