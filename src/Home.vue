<template>
  <!-- Header -->
  <header-bar
    :auth-store="authStore"
    :channel-store="channelStore"
    :message-store="messageStore"
  ></header-bar>

  <div class="main">
    <!-- Listings -->
    <channels
      :channel-store="channelStore"
    ></channels>
    <!-- Messages -->

    <router-view></router-view>
  </div>

  <div class="footer">
    <div class="user-menu">
      <span class="user-menu-profile-pic">
        <avatar
          @click="onAvatarClick"
          :picture-id="userStore.state.pictureId"
          title="Click to set a random profile picture">
        </avatar>
      </span>

      <input
      class="user-menu-username input-box-text"
        type="text"
        placeholder="Username"
        v-model="userStore.state.username"/>
    </div>
  </div>
</template>

<script>
  import Avatar from './components/Avatar.vue'
  import HeaderBar from './components/HeaderBar'
  import Channels from './components/Channels'
  import messageStore from './store/messages'
  import channelStore from './store/channels'
  import authStore from './store/auth'
  import userStore from './store/user'

  export default {
    components: {
      HeaderBar,
      Channels,
      Avatar
    },
    data () {
      return {
        messageStore: messageStore,
        channelStore: channelStore,
        userStore: userStore,
        authStore: authStore
      }
    },
    created () {
      channelStore.subscribeChannels();
    },
    methods: {
      onAvatarClick ()  {
        this.userStore.init();
      }
    }
  }
</script>