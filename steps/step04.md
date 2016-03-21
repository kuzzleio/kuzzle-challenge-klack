
# Steps

One cool thing of IRC-style messaging is that users can create channels, so that conversation topics are separated. After all, we don't want to chat all the time on the random channel, right? ;)  
We'll begin by adding the functionality to add channel and listen for channel addition.

**Fill the `addChannel` function in `store/channels.js`:**

* Create a new `channel` document in the `channels` data collection.
* Channel document format:

```json
{
  "name": "channel name"
}
```

**Fill the `subscribeChannels` function in `store/channels.js`:**

* Subscribe to the `channels` data collection, to make Klack aware of all channels modifications.
* As in step 2, configure your subscription. This time we want to be notified on our own messages, when documents are written in the database, and we want to only receive documents entering our filter scope.
* When receiving a new notification, update the `this.state.channels` variable

# Hints

* [Subscription documentation](http://kuzzleio.github.io/sdk-documentation/#subscribe)
* [Notifications documentation](http://kuzzleio.github.io/sdk-documentation/#notifications)
* [Document creation documentation](http://kuzzleio.github.io/sdk-documentation/#createdocument)

# What you should see

When creating a new channel, all your Klack windows display it instantly.
And since channels you create are now persisted, you can now reload Klack (or start new instances of it) without losing channels.

# Previous step's solution:
In `src/store/channels.js`:

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

# Next Step

```
git checkout . && git checkout step05
```

[Access to step 5](./step05.md)
