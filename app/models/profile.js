import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProfileModel extends Model {
  @attr('string') description;

  @belongsTo('user', { async: true, inverse: 'profile' }) user;
}
