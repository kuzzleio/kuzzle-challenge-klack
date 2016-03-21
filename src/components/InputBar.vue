<template>
  <div class="bottom-input">
    <div class="input-box">
      <input
        type="text"
        class="input-box-text"
        placeholder="New message"
        @keyup.enter="addMessage"
        v-model="newMessage"/>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['messageStore', 'currentUser', 'currentChannel'],
    data () {
      return {
        newMessage: null
      }
    },
    methods: {
      addMessage () {
        if (this.newMessage.length > 0) {
          this.messageStore.sendMessage(this.newMessage, this.currentUser, this.currentChannel);
          this.newMessage = '';
        }
      }
    }
  }
</script>
