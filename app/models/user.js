import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;

  @belongsTo('profile', { async: true, inverse: 'user' }) profile;
  @belongsTo('account', { async: true, inverse: 'user' }) account;
  @hasMany('post', { async: true, inverse: 'author' }) posts;
  @hasMany('reply', { async: true, inverse: 'author' }) replies;
}
