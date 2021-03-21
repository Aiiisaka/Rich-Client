import Abstractroute from './abstractroute';
import { action } from '@ember/object';

export default class SectionRoute extends Abstractroute {
  model() {
    return this.store.findAll('section', { include: 'products' });
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
    this.transitionTo('section.add-product');
  }

  @action product(section) {
    console.log(section.id);
    this.transitionTo('list-product');
  }

  @action editSection() {
    this.transitionTo('section.edit');
  }

  @action deleteSection() {
    this.transitionTo('section.delete');
  }
}
