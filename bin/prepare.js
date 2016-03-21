(
  function () {
    var
      Kuzzle = require('kuzzle-sdk'),
      path = require('path'),
      async = require('async'),
      processArgv = process.argv,
      fs = require('fs'),
      kuzzle,
      fixtures = require(path.join(__dirname, '..', 'fixtures', 'fixtures.json')),
      getFixture = function (folder, filename) {
        var
          fixturePath = path.join(__dirname, '..', 'fixtures', folder, filename);

        if (!fs.existsSync(fixturePath)) {
          throw new Error('Fixture file ' + fixturePath + ' does not exist');
        }

        return require(fixturePath);
      },
      getKuzzleActionFunction = function (fixtureConfig) {
        if (fixtureConfig.file) {
          var fixture = getFixture(fixtureConfig.folder, fixtureConfig.file);
        }

        // We never need a result from one call to another we return "no result" callbacks
        switch (fixtureConfig.action) {
          case 'createIndex':
            return function (callback) {
              console.log(`Creation of index ${processArgv[3]}`);
              kuzzle
                .query({controller: 'admin', action: 'createIndex', index: processArgv[3]}, {}, (error, result) => callback(error));
            };
          case 'createDocument':
            return function (callback) {
              console.log(`Creation of document ${fixtureConfig.identifier} in collection ${fixtureConfig.folder}`);
              kuzzle
                .dataCollectionFactory(fixtureConfig.folder)
                .createDocument(fixtureConfig.identifier, fixture, (error, result) => callback(error));
            };
          case 'createCollection':
            return function (callback) {
              console.log(`Creation of collection ${fixtureConfig.identifier}`);
              kuzzle
                .dataCollectionFactory(fixtureConfig.identifier)
                .dataMappingFactory(fixture)
                .apply((error, result) => callback(error));
            };
          case 'createRole':
            return function (callback) {
              console.log(`Creation of role ${fixtureConfig.identifier}`);
              kuzzle
                .security
                .roleFactory(fixtureConfig.identifier, fixture)
                .save((error, result) => callback(error));
            };
          case 'createProfile':
            return function (callback) {
              console.log(`Creation of profile ${fixtureConfig.identifier}`);
              kuzzle
                .security
                .profileFactory(fixtureConfig.identifier, fixture)
                .save((error, result) => callback(error));
            };
          case 'createUser':
            return function (callback) {
              console.log(`Creation of user ${fixtureConfig.identifier}`);
              kuzzle
                .security
                .userFactory(fixtureConfig.identifier, fixture)
                .save((error, result) => callback(error));
            };
        }
      },
      loopOnFixtures = function () {
        var
          waterfallFunctions = [];

        fixtures.forEach(fixture => {
          waterfallFunctions.push(getKuzzleActionFunction(fixture));
        });

        async.waterfall(waterfallFunctions, function (err, result) {
          if (err) {
            console.log('Error occured, see reason below:');
            console.log(err);
            process.exit(1);
          } else {
            console.log('Fixture import completed');
            process.exit(0);
          }
        });
      };

    if (process.argv.length < 4) {
      console.log('Usage:\n' +
        '  npm run prepare kuzzleUrl defaultIndex\n' +
        '\n' +
        '  kuzzleUrl: Url of the kuzzle server with socket.io port (e.g.: http://localhost:7512)\n' +
        '  defaultIndex: Index used to create workshop index (e.g.: klack)\n' +
        '\n' +
        '/!\\ It is advized to use "klack" as index or you will have to edit role fixtures to adapt them.\n' +
        '/!\\ Script assumes Anonymous user has admin rights.');

      return null;
    }

    kuzzle = new Kuzzle(processArgv[2], {defaultIndex: processArgv[3]});

    loopOnFixtures();
  }()
);
