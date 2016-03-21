# Hints:
* Use `deleteDocument` to delete a message (even if it's not current user message) in the `messages` collection; modify the subscription do handle deleted messages 
* In function `subscribeMessages`:
  * Change the scope to get also delete notifications
  * Differenciate `out` and `in` scoped document notifications, and treate `out` scoped messages
* In function `delete`, use `deleteDocument` to remove the given message (See [documentation](http://kuzzleio.github.io/sdk-documentation/#deletedocument))

# Previous step's solution:
```javascript
sendMessage (content, user, channel) {
  // Note: we're using ES6 new Object initializer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  var message = {content, user, channel, date: Date.now()};

  kuzzle
    .dataCollectionFactory('messages')
    .createDocument(message);
}
```
