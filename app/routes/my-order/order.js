import AbstractRoute from '../abstractroute';

export default class OrderRoute extends AbstractRoute {
  model(params) {
    var model = {};

    model.order = this.store.findRecord('order', params.order_id);
    model.products = this.store.findRecord('orderdetail', params.order_id);

    return model;
  }
}
