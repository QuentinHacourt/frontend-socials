import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class UserDetailsRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('user', params.user_id);
  }
}
