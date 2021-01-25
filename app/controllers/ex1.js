import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'Contenu par défaut';
  @tracked info = 'Défaut';
  @tracked style = 'alert-info';
  @tracked status = 'alert-info';
  MAX = 100;

  get status() {
    return this.status;
  }

  get info() {
    return this.info;
  }

  get style() {
    return this.style;
  }

  get content() {
    return this.content;
  }

  get size() {
    return this.MAX - this.content.length;
  }

  @action
  clear() {
    console.log('Clear !');
    this.info = 'Note supprimée !';
    this.content = '';
    this.style = 'alert-info';
  }

  @action
  save() {
    console.log('Saved !');
    this.info = 'Note enregistrée !';
    this.style = 'alert-success';
  }

  @action
  update() {
    console.log('Update !');
    this.info = 'Note modifiée !';

    this.style = 'alert-info';

    if (this.size < 20) {
      this.status = 'alert-danger';
    } else if (this.size < 50) {
      this.status = 'alert-warning';
    } else {
      this.status = 'alert-info';
    }
  }
}
