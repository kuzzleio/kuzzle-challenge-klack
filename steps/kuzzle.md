# Hints:
* You did it !

# Previous step's solution:
In `src/components/Message.vue` at line 10:
```html
<a class="delete-message" @click="deleteMessage" v-if="currentUserId === message.user.id">x</a>
```
In `fixtures/roles/klack-messages-restricted` take a look at the closure:

```json
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
```

We need to execute the action `get` on the magic id `$currentId` (corresponding to the document we want to delete) in `index` "klack", in the `collection` "messages".
 Next, we have access to `args.document` corresponding to the current document we want to delete. We can now test if the current user is the one who create the document.
