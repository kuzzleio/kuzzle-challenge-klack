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
   * TODO - Step 2: Publish a volatile message with Kuzzle
   * TODO - Step 6: Adapt code to create a new persisted message
   */
  sendMessage (content, user, channel) {
    var message = {content, user, channel, date: Date.now()};
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
   * TODO - Step 2: Subscribe to all notifications coming from Kuzzle's messages collection
   * TODO - Step 5: Add a filter to subscribe to a specific channel's messages
   * TODO - Step 7: This code should be adapted to follow scope.out as well
   */
  subscribeMessages (channel) {
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
