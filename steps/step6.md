# Hints:
* `subscribe` to a `messages` collection's room for a specific channel selected on click (See [documentation](http://kuzzleio.github.io/sdk-documentation/#subscribe))
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
addChannel (channel) {
  kuzzle
    .dataCollectionFactory('channels')
    .createDocument({name: channel});
}
```
