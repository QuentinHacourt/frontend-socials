import Model, { attr, belongsTo } from '@ember-data/model';

export default class AccountModel extends Model {
  @attr('string') name;

  @belongsTo('user', { async: true, inverse: 'account' }) user;
}
