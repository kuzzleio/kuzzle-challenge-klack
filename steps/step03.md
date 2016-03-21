# Steps

In IRC-style messaging systems, we can create and switch channels to chat into. Follow these steps to ask Kuzzle the list of existing channels.

**Fill the `getChannels` method in `store/channels.js`:**

* Search for existing documents in the `channels` collection. Documents in this data collection describe existing channels in the following format:

```json
{
  "name": "channel name"
}
```

* Put found channel names in `this.state.channels`

# Hints

* [Advanced Search documentation](http://kuzzleio.github.io/sdk-documentation/#advancedsearch)
* [KuzzleDocument properties](http://kuzzleio.github.io/sdk-documentation/#properties55)
* Search query to use:
```javascript
{
  sort: ['name'],
  from: 0,
  size: 9999
};
```

# What you should see

The left panel now lists the two default channels: #general and #random.

# Previous step's solution
In `src/store/messages.js`:

```javascript
subscribeMessages (channel) {
  var
    options = {
      // We want created messages only
      scope: 'in',
      // We treat our messages as any other messages
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

# Next Step

```
git checkout . && git checkout step04
```

[Access to step 4](./step04.md)
