# Hints:
* Add a search bar to search a specific word in messages of the current channel
* You will might need this [documentation](https://www.elastic.co/guide/en/elasticsearch/reference/1.7/query-dsl-match-query.html) to help you

# Previous step's solution:
```javascript
loadMessages (channel) {
  var query = {
    sort: {date: 'desc'},
    from: 0,
    size: 30,
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
