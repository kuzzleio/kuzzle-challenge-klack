# You did it!

Klack is now fully functional. Here is what you accomplished in this tutorial:

* You connected Klack to Kuzzle
* You made Klack send and receive messages across instances
* You made Klack list available channels and listen to channel modifications
* You made Klack persist messages and reload them when selecting the right channel
* You allowed users to delete messages
* You added a fuzzy search into Klack
* You made users authenticate themselves and authorized message deletion only by their owners

# Previous step's solution:

Here is how the `klack-messages` role should be configured:

```json
{
  "indexes": {
    "klack": {
      "_canDelete": false,
      "collections": {
        "messages": {
          "_canDelete": false,
          "controllers": {
            "read": {
              "actions": {
                "search": true
              }
            },
            "write": {
              "actions": {
                "create": true,
                "delete": {
                  "args": {
                    "document": {
                      "index": "klack",
                      "collection": "messages",
                      "action": {
                        "get": "$currentId"
                      }
                    }
                  },
                  "test": "return args.document.content.user.id === $currentUserId"
                }
              }
            },
            "subscribe": {
              "actions": {
                "on": true,
                "off": true
              }
            }
          }
        }
      }
    }
  }
}
```