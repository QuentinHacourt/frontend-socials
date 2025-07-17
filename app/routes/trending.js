import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TrendingRoute extends Route {
  @service trending;

  async model() {
    await this.trending.load();
    const mostRecent = this.trending.mostRecentPost;
    const mostPopular = this.trending.mostPopularPost;

    const dataForTemplate = {
      mostRecent: mostRecent,
      mostPopular: mostPopular,
    };

    return dataForTemplate;
  }
}
