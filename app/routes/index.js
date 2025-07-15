import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service currentSession;

  async model() {
    const account = this.currentSession.signedInPerson;
    const posts = await this.store.findAll('post', { include: ['author'] });

    const dataForTemplate = {
      posts: posts,
      account: account,
    };

    return dataForTemplate;
  }
}
