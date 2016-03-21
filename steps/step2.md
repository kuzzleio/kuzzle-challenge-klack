# Hints:
* `subscribe` to a `messages` collection's room to follow all `messages` document changes (See [documentation](http://kuzzleio.github.io/sdk-documentation/#subscribe))
* `publish` and display volatile messages (See [documentation](http://kuzzleio.github.io/sdk-documentation/#publishmessage))
* The notification given by `subscribe` should modify `state.messages`, not the `sendMessage` function
* Subscribe should filter on scope and state
* Messages should have the following structure:
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

# Previous step's solution:
`src/service/kuzzle.js` at line 5:

```javascript
var kuzzle = new Kuzzle(Config.kuzzleUrl, {defaultIndex: Config.defaultIndex});
```
