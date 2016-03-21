# Steps

In order to know who is who, we have to authenticate users. Let's see how to handle authentication with Kuzzle.  
Be sure to implement `login`, `logout` and `getCurrentUser` before testing login.

**Fill the file `store/auth.js`:**

* Implement the `login` method:
  * use the `local` authentication strategy
  * set the token expiration time to 1 hour
  * invoke the `loginCallback` function if there is no error
  * invoke the `loginCallbackError` function if there is an error

* Implement the `logout` method

**Fill the method `getCurrentUser` in `store/user.js`:**

* After getting the current user information from Kuzzle, invoke the `getCurrentUserCallback` function

# Hints

* [SDK Login documentation](http://kuzzleio.github.io/sdk-documentation/#login)
* [SDK Logout documentation](http://kuzzleio.github.io/sdk-documentation/#logout)
* [SDK Kuzzle documentation](http://kuzzleio.github.io/sdk-documentation/#kuzzle)
* [SDK WhoAmI documentation](http://kuzzleio.github.io/sdk-documentation/#whoami)

# What you should see

You are now able to login with username `kuzzle` and password `test`.  
You can also create new user with Kuzzle BO.

# Previous step's solution:

```javascript
search (channel, searchTerms) {
  var filter = {
    sort: {date: 'desc'},
    query : {
      match: {
        content: {
          query: searchTerms,
          operator : 'and'
        }
      }
    },
    filter: {
      term: {
        channel
      }
    }
  };

  kuzzle
    .dataCollectionFactory('messages')
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .advancedSearch(filter, (error, result) => {
      if (error) {
        console.error(error);
        return false;
      }

      this.state.searchMessages = result.documents
        // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        .map(message => {
          return {
            // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
            ...message.content,
            id: message.id
          };
        });
    });
}
```

# Next Step

> No checkout on the next tag: no code to produce.

[Access to step 11](./step11.md)
