import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class MyOrderCancelRoute extends Route {
  model(params) {
    return this.store.findRecord('order', params.order_id);
  }

  @action deleteOrder(order) {
    order.deleteRecord();
    order.save().then(() => this.transitionTo('board'));
  }
}
