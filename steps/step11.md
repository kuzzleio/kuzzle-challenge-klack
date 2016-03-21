# Explanation

This step shows Kuzzle right administration, and must be executed in Kuzzle. The goal is to set the Klack user roles to allow users to only delete their own messages.

We recommend to use the Kuzzle Back-Office to execute these steps.

# Steps

* Modify the `klack-messages` role, and add a closure to allow document deletion only if the user is the owner of the document

# Hints

* [Roles definition reference](https://github.com/kuzzleio/kuzzle/blob/beta/docs/security/roles-reference.md#actions-permissions-functions)
* Messages structure:

```javascript
{
    content: "Message content",
    user: {
      profileId: -1,
      pictureId: 3,
      username: "Bob"
    },
    channel: "channelName"
}
```

# Previous step's solution:
In `src/store/auth.js`:

```javascript
login (username, password) {
  // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
  kuzzle.login('local', {username, password}, '1h', (error, response) => {
    if (error) {
      loginCallbackError(error, this.state);
    }
    else {
      loginCallback(response.jwt, this.state);
    }
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

In `src/store/user.js`

```javascript
getCurrentUser (cb) {
  var jwt = window.sessionStorage.getItem('jwt');

  if (!jwt) {
    cb('No current user.');
    kuzzle.setJwtToken(undefined);
    return false;
  }

  kuzzle.setJwtToken(jwt);

  kuzzle
    .whoAmI((error, kuzzleUser) => {
      getCurrentUserCallback(error, kuzzleUser, this.state, cb)
    });
}
```

# Next Step

```
git checkout . && git checkout final
```

[Access to finale step](./final.md)
