import kuzzle from '../services/kuzzle'

let subscription = null;

export default {
  state: {
    messages: [],
    searchMessages: []
  },

  /**
   * Send the message to Kuzzle and to other users
   * @param {String} content
   * @param {Object} user
   * @param {String} channel
   * TODO - Step 6: Adapt code to create a new persisted message
   */
  sendMessage (content, user, channel) {
    var message = {content, user, channel, date: Date.now()};

    kuzzle
      .dataCollectionFactory('messages')
      .publishMessage(message);
  },

  /**
   * Reset the current message list
   */
  resetMessages () {
    this.state.messages = [];
    this.state.searchMessages = [];
  },
  /**
   * Load messages from Kuzzle according to the channel
   * @param {String} channel
   * TODO - Step 6: Fetch channel messages from Kuzzle persistent data
   * TODO - Step 8: Fetch only the 30 last messages
   */
  loadMessages (channel) {
    this.state.messages = [];
  },
  /**
   * Subscribe to messages according to the channel
   * @param {String} channel
   * TODO - Step 7: This code should be adapted to follow scope.out as well
   */
  subscribeMessages (channel) {
    var
    // Define the filter
      filter = {
        term: {
          channel: channel
        }
      },
      options = {
        // We want created messages only
        scope: 'in',
        // We treate our messages as any other messages
        subscribeToSelf: true,
        // We want only messages once they are stored (and volatile are always done)
        state: 'done'
      };

    // It is always a good thing to clean previous subscription to avoid side effects
    if (subscription) {
      subscription.unsubscribe();
    }

    subscription = kuzzle
      .dataCollectionFactory('messages')
      .subscribe(filter, options, (error, response) => {
        // We push messages in our state
        this.state.messages.push({
          ...response.result._source,
          id: response.result._id
        });
      });
  },
  /**
   * Search for messages from Kuzzle
   * @param {String} channel
   * @param {String} searchTerms
   * TODO - Step 9: Use Kuzzle advancedSearch to search terms in the given channel
   */
  search (channel, searchTerms) {
  },
  resetSearch () {
    this.state.searchMessages = [];
  },
  /**
   * Delete a message
   * @param {String} message
   * TODO - Step 7: Delete message from Kuzzle pesistant data
   */
  delete (message) {
    return false;
  }
}
