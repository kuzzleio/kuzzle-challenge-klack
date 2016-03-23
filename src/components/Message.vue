<style>
  .message {
    min-height: 48px;
  }
</style>

<template>
  <div class="message">
    <div class="action-hover-container" v-if="deletable">
      <a class="delete-message" @click="deleteMessage" v-if="currentUserId === message.user.id">x</a>
    </div>
    <avatar
      :clickable="false"
      :picture-id="message.user.pictureId">
    </avatar>
    <span class="message-username">{{message.user.username}}</span>
    <span class="message-star"></span>
    <span class="message-content">{{message.content}}</span>
  </div>
</template>

<script>
  import Avatar from './Avatar'

  export default {
    components: {
      Avatar
    },
    props: ['message', 'messageStore', 'deletable', 'currentUserId'],
    methods: {
      deleteMessage () {
        this.messageStore.delete(this.message);
      }
    }
  }
</script>
