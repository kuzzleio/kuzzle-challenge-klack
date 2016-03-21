# Hints:
* Use `createDocument` to create a new channel in `channels` collection (See [documentation](http://kuzzleio.github.io/sdk-documentation/#createdocument))
* Channel structure:
```javascript
{
  name: "channelName"
}
```

# Previous step's solution:
```javascript
subscribeChannels () {
  var options = {
    // We want created channels only
    scope: 'in',
    // We treate our channel creations as any other channels
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