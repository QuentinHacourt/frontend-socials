import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;

  @belongsTo('profile', { async: true, inverse: 'user' }) profile;
}
