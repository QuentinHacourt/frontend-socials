import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') content;
  @attr('date') created;

  @belongsTo('user', { inverse: 'posts', async: true }) author;
}
