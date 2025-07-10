import { service } from '@ember/service';
import Service from '@ember/service';

export default class CurrentSessionService extends Service {
  @service session;
  userP = trackedFunction(this, async () => {
    if (this?.session?.data?.authenticated?.relationships?.account?.data?.id) {
      return await (
        await this.store.findRecord(
          'account',
          this.session.data.authenticated.relationships.account.data.id,
          { include: 'person' },
        )
      ).person;
    }
  });
}
