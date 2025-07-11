import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostDetailsRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('post', params.post_id, {
      include: ['author'],
    });
  }
}
