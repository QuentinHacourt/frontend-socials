import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UserNewRoute extends Route {
  @service store;
  @service router;

  model() {
    return this.store.createRecord('user');
  }

  @action
  async saveUser(user) {
    try {
      await user.save();
      this.router.transitionTo('user-details', user.id);
    } catch (error) {
      console.error(error);
    }
  }
}
