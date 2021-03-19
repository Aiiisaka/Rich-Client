import Abstractroute from './abstractroute';
import { action } from '@ember/object';

export default class SectionRoute extends Abstractroute {
  model() {
    return this.store.findAll('section');
  }
  @action logout() {
    this.transitionTo('logout');
  }

  @action board() {
    this.transitionTo('board');
  }

  @action newSection() {
    this.transitionTo('section.add');
  }

  @action newProduct() {
    this.transitionTo('section.addProduct');
  }
}
