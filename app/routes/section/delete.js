import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionDeleteRoute extends Route {
  model(params) {
    return this.store.findRecord('section', params.section_id);
  }

  @action deleteSection(section) {
    section.deleteRecord();
    section.save().then(() => this.transitionTo('section'));
  }
}
