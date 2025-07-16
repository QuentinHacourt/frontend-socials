import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;
  @service currentSession;
  @service trending;

  async model() {
    const currentUserAccount = this.currentSession.signedInPerson;
    const posts = await this.store.findAll('post', { include: ['author'] });
    await this.trending.load();
    const mostRecent = this.trending.mostRecentPost;
    const mostPopular = this.trending.mostPopularPost;

    const dataForTemplate = {
      posts: posts,
      account: currentUserAccount,
      mostRecent: mostRecent,
      mostPopular: mostPopular,
    };

    return dataForTemplate;
  }

  @action
  refreshModel() {
    this.refresh();
  }
}
