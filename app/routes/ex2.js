import Route from '@ember/routing/route';
import { datas } from '../data/datas';
import MesServices from '../classes/services';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  promo = false;

  model() {
    return new MesServices(datas);
  }

  @action
  toggleActive(service) {
    set(service, 'active', !service.active);
  }

  @action
  togglePromo(){
    this.promo = !this.promo;
    if (this.promo) {
      this.transitionTo('ex2.promo');
    } else {
      this.transitionTo('ex2');
    }
  }
}
