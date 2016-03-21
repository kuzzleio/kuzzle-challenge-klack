<template>
  <div class="messages">
    <messages
      :message-store="messageStore"
      :messages="messageStore.state.messages"
      v-scroll-glue="messageStore.state.messages"
      :deletable="true"
      :current-user-id="userStore.state.id"
    ></messages>

    <input-bar
      :message-store="messageStore"
      :current-user="userStore.state"
      :current-channel="channelStore.state.current"
    ></input-bar>
  </div>

  <div class="search-right">
    <messages
      :message-store="messageStore"
      :messages="messageStore.state.searchMessages"
      :deletable="false"
    ></messages>
  </div>
</template>

<script>
import Messages from './components/Messages'
import InputBar from './components/InputBar'
import userStore from './store/user'
import messageStore from './store/messages'
import channelStore from './store/channels'
import scrollGlue from './directive/scrollGlue'

export default {
  components: {
    Messages,
    InputBar
  },
  directives: [scrollGlue],
  data () {
    return {
      messageStore: messageStore,
      userStore: userStore,
      channelStore: channelStore
    }
  },
  route: {
    data () {
      this.channelStore.setCurrent(this.$route.params.channel);
      this.messageStore.resetMessages();
      this.messageStore.loadMessages(this.$route.params.channel);
      this.messageStore.subscribeMessages(this.$route.params.channel);
    }
  }
}
</script>
