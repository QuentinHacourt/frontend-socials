import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class PostDetailsController extends Controller {
  @service store;
  @service router;

  @action
  async deletePost(post) {
    try {
      post.destroyRecord();
      console.log(`Post ${post.id} successfully deleted.`);
      this.router.transitionTo('index');
    } catch (error) {
      console.error(`failed to remove post: ${error}`);
    }
  }
}
