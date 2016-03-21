# Hints:
* Modify the `step 9` query in order to list only the 30 last messages

# Previous step's solution:
```javascript
loadMessages (channel) {
  var query = {
    sort: {date: 'desc'},
    filter: {
      term: {
        channel: channel
      }
    }
  };

  kuzzle
    .dataCollectionFactory('messages')
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .advancedSearch(query, (error, result) => {
      if (error) {
        console.error(error);
        return false;
      }

      this.state.messages = result.documents
        // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        .map(message => {
          return {
            // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
            ...message.content,
            id: message.id
          };
        })
        .reverse();
    });
}
```
