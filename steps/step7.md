# Hints:
* Use `createDocument` to create a new channel message in the `messages` collection (See [documentation](http://kuzzleio.github.io/sdk-documentation/#createdocument))

# Previous step's solution:
```javascript
subscribeMessages (channel) {
  var
    // Define the filter
    filter = {
      term: {
        channel: channel
      }
    },
    options = {
      scope: 'in',
      subscribeToSelf: true,
      state: 'done'
    };

  if (subscription) {
    subscription.unsubscribe();
  }

  subscription = kuzzle
    .dataCollectionFactory('messages')
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .subscribe(filter, options, (error, response) => {
      this.state.messages.push({
        // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
        ...response.result._source,
        id: response.result._id
      });
    });
}
```
