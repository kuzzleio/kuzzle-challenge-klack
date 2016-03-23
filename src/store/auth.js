import {router} from '../main';
import kuzzle from '../services/kuzzle';
import userStore from './user';

export default {
  state: {
    errorLogin: null
  },
  login (username, password) {
    kuzzle.login('local', {username, password}, '1h', (error, response) => {
      if (error) {
        loginCallbackError(error, this.state);
      }
      else {
        loginCallback(response.jwt, this.state);
      }
    });
  },
  logout () {
    kuzzle.logout();
    userStore.removeCurrentUser();
    window.sessionStorage.removeItem('jwt');
  }
}

/**
 * This function is called once the user is logged in
 *
 * @param error - Error from kuzzle login
 * @param {String} jwt - Jwt from Kuzzle's response
 * @param {Object} state - The state from the store (this.state)
 */
let loginCallback = function (jwt, state) {
  state.errorLogin = null;

  window.sessionStorage.setItem('jwt', jwt);

  userStore.getCurrentUser(() => {
    router.go({name: 'home'});
  });
};

/**
 * This function is called when an error occured on login
 *
 * @param error - Error from kuzzle login
 * @param {Object} state - The state from the store (this.state)
 */
let loginCallbackError = function (error, state) {
  state.errorLogin = null;

  if (error) {
    if (error.message) {
      state.errorLogin = error.message
    }

    return false;
  }
};
