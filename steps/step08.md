# Steps

On Slack we have no pagination, but we probably want to limit the amount of retrieved messages.

**Fill the `loadMessages` method in `messages.js`:**

* Modify the step 6 query in order to list only the 30 last messages

# Hints

* [From / Size](https://www.elastic.co/guide/en/elasticsearch/reference/1.7/search-request-from-size.html)

# What you should see

When switching from a room to another, only the 30 latest messages should be displayed.

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

# Next Step

```
git checkout . && git checkout step09
```

[Access to step 9](./step09.md)
