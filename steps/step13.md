# Hints:
* Only allow current user to delete his messages
  * This step is done via right modifications in Kuzzle
* For once it is a cosmetic modification (v-if is your friend)

# Previous step's solution:
```javascript
login (username, password) {
  // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
  kuzzle.login('local', {username, password}, '1h', (error, response) => {
    this.state.errorLogin = null;
    if (error) {
      if (error.message) {
        this.state.errorLogin = error.message
      }

      return false;
    }

    window.sessionStorage.setItem('jwt', response.jwt);

    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    userStore.getCurrentUser(() => {
      router.go({name: 'home'});
    });
  });
}
```

```javascript
logout () {
  kuzzle.logout();
  userStore.removeCurrentUser();
  window.sessionStorage.removeItem('jwt');
}
```

```javascript
getCurrentUser (cb) {
  var jwt = window.sessionStorage.getItem('jwt');

  if (!jwt) {
    cb('No current user.');
    kuzzle.setJwtToken(undefined);
    return false;
  }

  // Give the token to kuzzle; it will be used for any further requests
  kuzzle.setJwtToken(jwt);

  kuzzle
    // We get the current user information
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .whoAmI((error, result) => {
      if (error) {
        window.sessionStorage.removeItem('jwt');
        kuzzle.setJwtToken(undefined);
        cb(error);
        return false;
      }

      this.state.id = result.id;
      this.state.username = result.content.username;
      // defaults to author
      this.state.pictureId = result.content.pictureId || 3;

      cb(null, result);
    });
}
```
