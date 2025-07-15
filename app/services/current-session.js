import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentSessionService extends Service {
  @service session;
  @service store;
  @tracked signedInPerson;

  async load() {
    const accountID =
      this?.session?.data?.authenticated?.data?.relationships?.account?.data
        ?.id;
    if (accountID) {
      const account = await this.store.findRecord('account', accountID, {
        include: 'user',
      });

      this.signedInPerson = await account.user;
    }
  }
}
