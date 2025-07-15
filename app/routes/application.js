import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;
  @service currentSession;

  async beforeModel(...args) {
    await this.session.setup();
    await this.currentSession.load();
  }
}
