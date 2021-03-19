import AbstractRoute from './abstractroute';
import { action } from '@ember/object';

export default class LogoutRoute extends AbstractRoute {
  @action toIndex() {
    this.userAuth.logout();
    this.transitionTo('index');
  }
}
