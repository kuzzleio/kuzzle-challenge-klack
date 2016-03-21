# Steps

We don't want to lose our really interesting conversations. Let's add persistence!

**Fill the `sendMessage` method in `messages.js`:**

* Instead of publishing a volatile message, create a document in the `messages` collection instead

**Fill the `loadMessages` method in `messages.js`:**

* Search for this channel documents in the `messages` collection

# Hints

* [Document creation documentation](http://kuzzleio.github.io/sdk-documentation/#createdocument)
* [SDK Search documentation](http://kuzzleio.github.io/sdk-documentation/#advancedsearch)
* [Elasticsearch 1.7 term filter](https://www.elastic.co/guide/en/elasticsearch/reference/1.7/query-dsl-term-filter.html)
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

# What you should see

Messages are now persisted. You can reload Klack or start new instances of it, and retrieve previous sent messages.

# Previous step's solution:
```javascript
subscribeMessages (channel) {
  var
    // Define the filter
    filter = {
      term: {
        channel: channel
      }
    },
    options = {
      scope: 'in',
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
      this.state.messages.push({
        // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
        ...response.result._source,
        id: response.result._id
      });
    });
}
```

# Next Step

```
git checkout . && git checkout step07
```

[Access to step 7](./step07.md)
