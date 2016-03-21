# Hints:
* Use `advancedSearch` to list channel in `channels` collection (See [documentation](http://kuzzleio.github.io/sdk-documentation/#advancedsearch))
* Following query could help somewhere:

```javascript
{
  sort: ['name'],
  from: 0,
  size: 9999
};
```

# Previous step's solution:
In `src/store/messages.js`:

```javascript
subscribeMessages (channel) {
  var
    options = {
      // We want created messages only
      scope: 'in',
      // We treate our messages as any other messages
      subscribeToSelf: true,
      // We want only messages once they are stored (and volatile are always done)
      state: 'done'
    };

  // It is always a good thing to clean previous subscription to avoid side effects
  if (subscription) {
    subscription.unsubscribe();
  }

  subscription = kuzzle
    .dataCollectionFactory('messages')
    // Without filter as we want all incoming new message notifications
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .subscribe({}, options, (error, response) => {
      // We push messages in our state
      this.state.messages.push({
        // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
        ...response.result._source,
        id: response.result._id
      });
    });
}
```

```javascript
sendMessage (content, user, channel) {
  // Note: we're using ES6 new Object initializer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  var message = {content, user, channel, date: Date.now()};

  kuzzle
    .dataCollectionFactory('messages')
    .publishMessage(message);
}
```
