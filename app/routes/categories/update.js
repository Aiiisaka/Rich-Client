import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesUpdateRoute extends Route {
  renderTemplate(controller, model) {
    this.render('categories.update');
  }

  @action save(contact) {
    contact.save().then(() => {
      this.transitionTo('categories');
    });
  }

  @action annuler() {
    this.transitionTo('categories');
  }
}
