import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostDetailsRoute extends Route {
  @service store;
  @service currentSession;

  async model(params) {
    const post = await this.store.findRecord('post', params.post_id, {
      include: ['author', 'replies', 'replies.author'],
    });

    const person = this.currentSession.signedInPerson;

    const dataForTemplate = {
      post: post,
      person: person,
    };

    return dataForTemplate;
  }
}
