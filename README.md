# Workshop Kuzzle: Build a slack with Kuzzle

This is the code for the Kuzzle workshop to present the beta version. The code is split in tags and each tag is a step to build a Slack clone.

## Preparation

To prepare the workshop, we need to set up necessary data in Kuzzle. Fixtures are located in `fixtures/` folder:

* channels: 2 channel documents to set up the default channels
* collections: collection mapping for the 2 collections `messages` and `channels`
* profiles: 2 profiles with different rights
* roles: klack user roles
* users: default `kuzzle` user

## Workshop agenda

Here is the list of the different exercises, it is advised to do them in the given order. You should change your tag at each step; some modifications are done in order to make the application work:

 * [step1](steps/step1.md): Copy `src/config.js.example` as `src/config.js` and adapt it to your configuration, and initialize kuzzle SDK in `src/services/kuzzle.js`. 
 * [step2](steps/step2.md): `subscribe` to a `messages` collection's room to follow all `messages` document changes; `publish` and display volatile messages
 * [step3](steps/step3.md): Use `advancedSearch` to list channel in `channels` collection
 * [step4](steps/step4.md): `subscribe` to a `channels` collection's room to follow all `channels` document changes (created channels)
 * [step5](steps/step5.md): Use `createDocument` to create a new channel in `channels` collection
 * [step6](steps/step6.md): `subscribe` to a `messages` collection's room for a specific channel selected on click
 * [step7](steps/step7.md): Use `createDocument` to create a new channel message in the `messages` collection
 * [step8](steps/step8.md): Use `deleteDocument` to delete a message (even if it's not current user message) in the `messages` collection; modify the subscription do handle deleted messages
 * [step9](steps/step9.md): Use `advancedSearch` to list all channel messages in the `messages` collection
 * [step10](steps/step10.md): Modify the `step 9` query in order to list only the 30 last messages
 * [step11](steps/step11.md): Add a search bar to search a specific word in messages of the current channel
 * [step12](steps/step12.md): Add login and logout process, get current user and display the real username
 * [step13](steps/step13.md): Only allow current user to delete his messages
 * [kuzzle](steps/kuzzle.md): Complete demo code with kuzzle integration

## Workshop structure

If you're lost at any step, you should search for TODO flags to know where to go.
All workshop sources are located in the src folder.
All modifications should only be located in the folder src/store and in src/services/kuzzle.
Display modifications are adapted step by step to avoid you to deal with them.
 
## Kuzzle SDK

You can find the SDK documentation [here](http://kuzzleio.github.io/sdk-documentation/)

## Prerequisite

You should have `npm` and `node` in order to install dependencies and run webpack.
Some issues have been encountered with old versions of node/npm.
If it happens, we suggest to update your installed version of node.

## Install dependencies

```bash
# In the root folder of the workshop sources
npm install
```

## Run webpack

Webpack is a node.js server that compiles and serves files. it provides on the fly compilation and hot reload in the browser.
You still might need to reload the page when heavy modifications are made.
It can be accessed with URL localhost:8585.

```bash
# In the root folder of the workshop sources
npm run dev
```

## Credits

Styles come from https://github.com/scotch-io/meteor-slack