import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UserNewController extends Controller {
  @service router;
  @service store;

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
