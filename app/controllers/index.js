import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @service store;
  @service currentSession;
  @tracked text = '';

  @action
  async addPost() {
    const postContent = this.text.trim();
    const currentUser = this.currentSession.signedInPerson;

    if (postContent) {
      const newPost = this.store.createRecord('post', {
        content: postContent,
        created: new Date(),
        author: currentUser,
      });

      try {
        await newPost.save();
        this.text = '';
        console.log(`post ${newPost.id} saved succesfully!`);
      } catch (error) {
        console.error(`error while saving post: ${error}`);
      }
    }
  }

  @action
  async deletePost(post) {
    await store.deleteRecord('post', post);
  }
}
