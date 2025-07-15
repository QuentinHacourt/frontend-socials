import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') content;
  @attr('date') created;

  @belongsTo('user', { inverse: 'posts', async: true }) author;
  @hasMany('reply', { inverse: 'post', async: true }) replies;
}
