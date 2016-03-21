# Hints:
* `subscribe` to a `channels` collection's room to follow all `channels` document changes (created channels) (See [documentation](http://kuzzleio.github.io/sdk-documentation/#subscribe))
* Subscribe should filter on scope and state

# Previous step's solution:
```javascript
getChannels () {
  var query = {
    sort: ['name'],
    from: 0,
    size: 9999
  };
  
  kuzzle
    .dataCollectionFactory('channels')
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .advancedSearch(query, (error, result) => {
      if (error) {
        console.error(error);
        return false;
      }
  
      // Loop on the array to extract an array of names (Awesomeness)
      // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      this.state.channels = result.documents.map(channel => channel.content.name);
    });
}
```

