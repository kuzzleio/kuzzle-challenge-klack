<template>
  <div class="message-history">
    <!-- Message Loop -->
    <message v-for="message in messages"
             :message="message"
             :message-store="messageStore"
             :current-user-id="currentUserId"
             :deletable="deletable">
    </message>
  </div>
</template>

<script>
  import Message from './Message'

  export default {
    props: ['messageStore', 'messages', 'deletable', 'currentUserId'],
    components: {
      Message
    }
  }
</script>