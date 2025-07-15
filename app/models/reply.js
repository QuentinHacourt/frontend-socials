import Model, { attr, belongsTo } from '@ember-data/model';

export default class ReplyModel extends Model {
  @attr('string') content;
  @attr('date') created;

  @belongsTo('post', { async: true, inverse: 'replies' }) post;
  @belongsTo('user', { async: true, inverse: 'replies' }) author;
}
