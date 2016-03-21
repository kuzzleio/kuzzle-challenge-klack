# Steps

It would be nice if we could find specific messages in a channel according to its content.

**Fill the `search` method in `messages.js`:**

* Fill `this.state.searchMessages` with all messages matching the provided `searchTerms` argument, on the current `channel`

# Hints

* [SDK Search documentation](http://kuzzleio.github.io/sdk-documentation/#advancedsearch)
* [Elasticsearch Match Query](https://www.elastic.co/guide/en/elasticsearch/reference/1.7/query-dsl-match-query.html)
* Messages structure:

```javascript
{
    content: "Message content",
    user: {
      profileId: -1,
      pictureId: 3,
      username: "Bob"
    },
    channel: "channelName"
}
```
* Query template:

```javascript
{
  sort: {date: 'desc'},
  query : {
   ...
  },
  filter: {
    term: {
      channel
    }
  }
}
```

# What you should see

You can now search for messages in the current channel.

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

# Next Step

```
git checkout . && git checkout step10
```

[Access to step 10](./step10.md)
