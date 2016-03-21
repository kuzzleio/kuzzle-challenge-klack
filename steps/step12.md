# Hints:
* Add login process
* Add logout process
* Get current user with `whoAmI`
  * `getCurrentUser` gets a callback as parameter and call it once the you have the result of `whoAmI`
* Display the real username (We do this one for you)

# Previous step's solution:
```javascript
search (channel, searchTerms) {
  var filter = {
    sort: {date: 'desc'},
    query : {
      match: {
        content: {
          query: searchTerms,
          operator : 'and'
        }
      }
    },
    filter: {
      term: {
        channel
      }
    }
  };

  kuzzle
    .dataCollectionFactory('messages')
    // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    .advancedSearch(filter, (error, result) => {
      if (error) {
        console.error(error);
        return false;
      }

      this.state.searchMessages = result.documents
        // Note: we're using ES6 arrow functions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        .map(message => {
          return {
            // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
            ...message.content,
            id: message.id
          };
        });
    });
}
```
