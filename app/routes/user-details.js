import route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class userdetailsroute extends route {
  @service store;
  @service currentSession;

  async model(params) {
    const user = await this.store.findRecord('user', params.user_id, {
      include: ['profile'],
    });

    const isUser = await this.isCurrentUser(params.user_id);

    const dataForTemplate = {
      user: user,
      isCurrentUser: isUser,
    };

    return dataForTemplate;
  }

  async isCurrentUser(profileUserId) {
    const currentUser = await this.currentSession.signedInPerson;

    if (!currentUser) return false;

    const currentUserId = currentUser.id;

    if (profileUserId === currentUserId) return true;

    return false;
  }

  @action
  refreshModel() {
    this.refresh();
  }
}
