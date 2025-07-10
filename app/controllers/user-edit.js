import { service } from '@ember/service';
import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class UserEditController extends Controller {
  @service router;
  @action
  async updateUser(user, event) {
    event.preventDefault();
    await user.save();
    this.router.transitionTo('user-details', user);
  }

  @action
  async deleteUser(user) {
    await user.destroyRecord();
    this.router.transitionTo('users');
  }
}
