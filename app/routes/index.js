import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;
  @service currentSession;

  async model() {
    const currentUserAccount = this.currentSession.signedInPerson;
    const posts = await this.store.findAll('post', { include: ['author'] });

    const dataForTemplate = {
      posts: posts,
      account: currentUserAccount,
    };

    return dataForTemplate;
  }

  @action
  refreshModel() {
    this.refresh();
  }
}
