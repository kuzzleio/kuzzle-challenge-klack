import Kuzzle from 'kuzzle-sdk'
import Config from '../config'

/** TODO - Step 1: initialize a Kuzzle object */
var kuzzle = new Kuzzle(Config.kuzzleUrl, {defaultIndex: Config.defaultIndex});

export default kuzzle;