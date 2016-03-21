# Steps

Sometimes, we said something that we regret... That could be nice to delete messages.

**Fill the `delete` method in `store/messages.js`:**

* Implement the method by asking Kuzzle to delete the message provided as argument.

**Modify the `subscribeMessages` method in `store/messages.js`:**

* Subscribe to all scopes
* Handle `in` and `out` notifications differently: `out` notifications should remove the message from the screen

# Hints

* In all previous steps we've been storing the message `id` in Klack's structures ;-)
* [Document deletion documentation](http://kuzzleio.github.io/sdk-documentation/#deletedocument)
* [Document deleted notification](http://kuzzleio.github.io/kuzzle-api-documentation/?websocket#a-document-has-been-deleted)

# What you should see

You can now permanently delete messages, and all opened Klack instances update instantly.

# Previous step's solution:
In `src/store/messages.js`

```javascript
sendMessage (content, user, channel) {
  // Note: we're using ES6 new Object initializer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  var message = {content, user, channel, date: Date.now()};

  kuzzle
    .dataCollectionFactory('messages')
    .createDocument(message);
}
```

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
      .advancedSearch(query, (error, result) => {
        if (error) {
          console.error(error);
          return false;
        }

        this.state.messages = result.documents
          .map(message => {
            return {
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
git checkout . && git checkout step08
```

[Access to step 8](./step08.md)
