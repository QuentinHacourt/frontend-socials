import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;

  async beforeModel(...args) {
    await this.session.setup();
  }
}
