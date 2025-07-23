import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class BirthdayController extends Controller {
  @service store;
  @service currentSession;

  @action
  async addBirthday() {
    const currentUser = this.model.user;

    currentUser.save();
  }
}
