# Steps

The basic feature of an instant messaging is... Sending and receiving messages, right? Let's see how easy is to get it done with Kuzzle :)

**Fill the `subscribeMessages` method in `store/messages.js`:**

* The subscription callback is called everytime a message is received. In this callback, store the message content in `this.state.messages`.
* In further steps, Klack will send and receive persited documents instead of volatile messages. To handle these notifications correctly, configure your subscription to receive only notifications when documents have been persisted in the database, and on document entering your scope only.
* Because we want to treat our own messages like any other message, configure your subscription to make it listen to your own notifications.

**Fill the `sendMessage` method in `store/messages.js`:**

* Publish the message to `messages` collection.

# Hints

* [Publish documentation](http://kuzzleio.github.io/sdk-documentation/#publishmessage)
* [Subscription documentation](http://kuzzleio.github.io/sdk-documentation/#subscribe)
* [Notifications documentation](http://kuzzleio.github.io/sdk-documentation/#notifications)
* Messages format to send to Kuzzle:
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
* Message format to store in `this.state.messages`
```javascript
{
  // Note: we're using ES6 spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
  ...response.result._source,
  id: response.result._id
}
```

# What you should see

You can now send messages and see them appear in the conversation window. If you open another window, they can communicate together.

# Previous step's solution
`src/service/kuzzle.js` at line 5:

```javascript
var kuzzle = new Kuzzle(Config.kuzzleUrl, {defaultIndex: Config.defaultIndex});
```

# Next Step

```
git checkout . && git checkout step03
```

[Access to step 3](./step03.md)
