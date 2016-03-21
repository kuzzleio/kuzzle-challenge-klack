import {router} from '../main';
import kuzzle from '../services/kuzzle';
import userStore from './user';

export default {
  state: {
    errorLogin: null
  },
  login (username, password) {
    /** TODO - Step 12: Log in the user to Kuzzle */
  },
  logout () {
    /** TODO - Step 12: Log out the user to Kuzzle */
  }
}