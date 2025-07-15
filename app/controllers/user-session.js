import Controller from '@ember/controller';
import { action } from '@ember/object';
import CurrentSessionService from '../services/current-session';

export default class UserSessionController extends Controller {
  @action
  getUserSession() {
    return CurrentSessionService.userP();
  }
}
