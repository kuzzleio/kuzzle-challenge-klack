# Workshop Kuzzle: Build a slack with Kuzzle

This is the code for the Kuzzle workshop to present the beta version. The code is split in tags and each tag is a step to build a Slack clone.

## Workshop agenda

Here is the list of the different exercises, it is advised to do them in the given order.  
To start working on a step you have to switch on the corresponding [git tag](https://github.com/kuzzleio/kuzzle-challenge-klack/releases) by typing `git checkout stepXX`.

* [step01](steps/step01.md): Connect to Kuzzle
* [step02](steps/step02.md): Send and receive volatile messages
* [step03](steps/step03.md): List available channels
* [step04](steps/step04.md): Create new channels and subscribe to changes
* [step05](steps/step05.md): Listen only to current channel messages
* [step06](steps/step06.md): Persist and reload messages
* [step07](steps/step07.md): Delete messages
* [step08](steps/step08.md): Limit search results
* [step09](steps/step09.md): Perform a fuzzy search
* [step10](steps/step10.md): Add authentication
* [step11](steps/step11.md): One should only delete his own messages
* [final](steps/final.md): Complete demo code with kuzzle integration

## Prerequisite

* You should have `npm` and `node` (>= v4.4.1) in order to install dependencies and run webpack.
* You must have a **Kuzzle running on tag beta**. You can use the default `docker-compose.yml` to easily launch it.
```
docker-compose up
```

### Back office (optional)
If you are playing this workshop on your own Kuzzle instance, it is strongly suggested to install the Kuzzle Back-Office.
To do so, read the [Kuzzle Back-Office readme](https://github.com/kuzzleio/kuzzle-bo)

### Admin account (optional)
If you are playing this workshop on your own Kuzzle instance, before to load the workshop fixtures, it is strongly recommended to create an admin on your kuzzle.
You can do it from the Kuzzle back-office, or from the [CLI](https://github.com/kuzzleio/kuzzle/tree/beta/bin) but do not reset the default roles to allow the fixtures to be loaded.


## Preparation

Before running this tutorial, you'll need to install dependencies and to prepare the database. To do that, please run:

```bash
# In the root folder of the workshop sources
npm install
npm run prepare <kuzzleUrl> <indexName>

# You can use npm run prepare to see usage
```

> It is advised to use "klack" as index or you will have to edit role fixtures to adapt them.
Script assumes Anonymous user has admin rights.

## Let's START

* Copy `src/config.js.example` as `src/config.js` and adapt it to your configuration.
* Run following commands in a terminal:
```bash
# In the root folder of the workshop sources
npm install
npm run dev
```

> The command `npm run dev` will launch a Webpack. Webpack is a node.js server that compiles and serves files. it provides on the fly compilation and hot reload in the browser.
You still might need to reload the page when heavy modifications are made.

* On another terminal:
```
git checkout step01
```

Go to the URL http://localhost:8585 for access to Klack interface.  
Go to [step 1](./steps/step01.md) and let's code!

> :warning: All modifications should only be located in the folder src/store and in src/services/kuzzle.

## Credits

Styles come from https://github.com/scotch-io/meteor-slack

## License

This tutorial is published under [Apache 2 License](LICENSE.md).
