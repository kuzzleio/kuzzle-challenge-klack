# Hints:
* Use `advancedSearch` to list all channel messages in the `messages` collection (See [documentation](http://kuzzleio.github.io/sdk-documentation/#advancedsearch))
* Message should be pushed in `state.messages` with its id:
```javascript
{
  // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
  ...response.result._source,
  id: response.result._id
}
```

# Previous step's solution:
```javascript
subscribeMessages (channel) {
  var
    filter = {
      term: {
        channel: channel
      }
    },
    options = {
      scope: 'all',
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
      // repsonse.scope contains the scope depending to the subscription
      if (response.scope === 'out') {
        // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        this.state.messages = this.state.messages.filter(message => {
          return message.id !== response.result._id;
        });
      }

      if (response.scope === 'in') {
        this.state.messages.push({
          // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
          ...response.result._source,
          id: response.result._id
        });
      }
    });
}
```

```javascript
delete (message) {
  if (!message || !message.id) {
    return false;
  }

  kuzzle
    .dataCollectionFactory('messages')
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .deleteDocument(message.id, (error, response) => {
      if (error) {
        console.error(error);
      }
    });
}
```