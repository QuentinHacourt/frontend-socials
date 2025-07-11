import route from '@ember/routing/route';
import { service } from '@ember/service';

export default class userdetailsroute extends route {
  @service store;

  model(params) {
    return this.store.findRecord('user', params.user_id, {
      include: ['profile'],
    });
  }
}
