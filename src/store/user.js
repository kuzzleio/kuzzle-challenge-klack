import kuzzle from '../services/kuzzle';
import {router} from '../main';

export default {
  state: {
    id: -1,
    username: "Bob",
    pictureId: Math.floor(Math.random() * 12 + 1)
  },

  init () {
    this.state.pictureId = Math.floor(Math.random() * 12 + 1);
  },
  isAuthenticated () {
    return Boolean(this.state.id);
  },
  getCurrentUser (cb) {
    var jwt = window.sessionStorage.getItem('jwt');

    if (!jwt) {
      cb('No current user.');
      /** TODO Step - 10: set the jwt token to undefined **/

      return false;
    }

    /** TODO Step - 10: set the jwt token **/
    /** TODO Step - 10: get the current user and call getCurrentUserCallback **/
  },
  removeCurrentUser () {
    this.state.id = null;
    this.state.username = null;
    this.state.pictureId = null;
  }
}

/**
 * This function is called once the user is get from Kuzzle
 *
 * @param error - Error from Kuzzle
 * @param {Object} kuzzleUser - kuzzleUser given by Kuzzle
 * @param {Object} state - The state from the store
 * @param {Function} cb - Directly passed from input in getCurrentUser
 */
let getCurrentUserCallback = function (error, kuzzleUser, state, cb) {
  if (error) {
    window.sessionStorage.removeItem('jwt');
    kuzzle.setJwtToken(undefined);
    cb(error);

    return false;
  }

  state.id = kuzzleUser.id;
  state.username = kuzzleUser.content.username;
  // defaults to author
  state.pictureId = kuzzleUser.content.pictureId || 3;

  cb(null, kuzzleUser);
};