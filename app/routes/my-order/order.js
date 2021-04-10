import AbstractRoute from '../abstractroute';

export default class OrderRoute extends AbstractRoute {
  model(params) {
    return this.store.findRecord('orderdetail', params.order_id, {
      include: 'products',
    });
  }
}
