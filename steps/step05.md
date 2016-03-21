# Steps

**Fill the `subscribeMessages` function in `store/messages.js`:**

* Modify the message subscription to limit message notifications to the current channel

# Hints

* [Subscription documentation](http://kuzzleio.github.io/sdk-documentation/#subscribe)
* [Kuzzle DSL "term" filter](https://github.com/kuzzleio/kuzzle/blob/master/docs/filters.md#term)

# What you should see

When sending messages, they are only received by Klack instances having the same selected channel.

# Previous step's solution:
In `src/store/channels.js`:

```javascript
addChannel (channel) {
  kuzzle
    .dataCollectionFactory('channels')
    .createDocument({name: channel});
}
```

```javascript
subscribeChannels () {
  var options = {
    // We want created channels only
    scope: 'in',
    // We treat our channel creations as any other channels
    subscribeToSelf: true,
    // We want only channels once they are stored
    state: 'done'
  };

  kuzzle
    .dataCollectionFactory('channels')
    // Without filter as we want all incoming new channel notifications
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .subscribe({}, options, (error, response) => {
      if (error) {
        console.error(error);
        return false;
      }

      // We push channels in our state
      this.state.channels.push(response.result._source.name);
      this.state.channels.sort();
    });
}
```

# Next Step

```
git checkout . && git checkout step06
```

[Access to step 6](./step06.md)
