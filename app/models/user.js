import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;

  @belongsTo('profile', { async: true, inverse: 'user' }) profile;
  @hasMany('post', { async: true, inverse: 'author' }) posts;
}
