import Model from '@ember-data/model';

export default class SessionModel extends Model {
  @attr('string') id;
  @attr('string') name;
}
