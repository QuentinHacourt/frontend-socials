import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TrendingService extends Service {
  @tracked mostPopularPost;
  @tracked mostRecentPost;

  async load() {
    this.mostPopularPost = await this.fetchRequest(
      'http://localhost:80/trending/most-popular-post',
    );
    this.mostRecentPost = await this.fetchRequest(
      'http://localhost:80/trending/most-recent-post',
    );
  }

  async fetchRequest(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      return json.data;
    } catch (error) {
      console.error(`TrendingService failed to fetch data: ${error.message}`);
    }
  }
}
