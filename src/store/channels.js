import kuzzle from '../services/kuzzle'

export default {
  state: {
    channels: [],
    searchTerms: '',
    current: "random"
  },
  /**
   * Get channels from Kuzzle
   * TODO - Step 3: Fetch channels from Kuzzle peristent data
   */
  getChannels () {
  },
  /**
   * Allow to add a new channel given in parameter
   * @param channel
   * @returns {Number}
   * TODO - Step 5: Add the channel in Kuzzle persistent data
   */
  addChannel (channel) {
    this.state.channels.push(channel);
    this.state.channels.sort();
  },
  /**
   * Remove a channel according to the channel name given
   * @param channel
   */
  removeChannel (channel) {
    return this.state.channels.$remove(channel)
  },
  /**
   * Set the current channel
   * @param {String} channel
   */
  setCurrent (channel) {
    this.state.searchTerms = '';
  },
  /**
   * Subscribe to channels
   * @param {String} channel
   * TODO - Step4: Subscribe with Kuzzle to `channels` collection's notifications
   */
  subscribeChannels () {
  }
}