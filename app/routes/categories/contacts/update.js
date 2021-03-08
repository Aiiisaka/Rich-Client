import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsUpdateRoute extends Route {
  renderTemplate(controller, model) {
    this.render('contacts.update');
  }

  @action save(contact) {
    contact.save().then(() => {
      this.transitionTo('contacts');
    });
  }

  @action annuler() {
    this.transitionTo('contacts');
  }
}
