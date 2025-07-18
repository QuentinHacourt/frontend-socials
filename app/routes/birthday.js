import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BirthdayRoute extends Route {
  @service currentSession;

  async model() {
    const currentUserAccount = await this.currentSession.signedInPerson;

    const dataForTemplate = {
      user: currentUserAccount,
    };

    return dataForTemplate;
  }
}
