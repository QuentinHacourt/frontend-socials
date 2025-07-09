import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UserEditRoute extends Route {
  @service store;
  @service router;

  model(params) {
    return this.store.findRecord('user', params.user_id);
  }

  @action
  async updateUser(user) {
    try {
      await user.save();
      this.router.transitionTo('user-details', user.id);
    } catch (error) {
      console.error(error);
    }
  }

  @action
  async deleteUser(user) {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        await user.destroyRecord();
        this.router.transitionTo('users');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
