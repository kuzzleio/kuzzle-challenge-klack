<template>
  <div class="header">
    <div class="team-menu">
      <span>Klack</span>
      <a v-link="{ path: '/login' }" class="logout" @click="logout">Logout</a>
    </div>
    <div class="channel-menu">

      <channel-name :name="state.current"></channel-name>

      <div id="header-search-form" class="search-form no-bottom-margin">
        <div class="highlighter-wrapper">

          <input
            type="text"
            id="search-terms"
            class="search-input search-input-highlighted"
            placeholder="Search"
            maxlength="250"
            @keyup="triggerSearch()"
            v-model="state.searchTerms"
          />

          <div class="highlighter-underlay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChannelName from './ChannelName';

  export default {
    props:['channelStore', 'authStore', 'messageStore'],
    components: {
      ChannelName
    },
    data () {
      return {
        state: this.channelStore.state
      }
    },
    methods: {
      triggerSearch () {
        if (this.state.searchTerms.length > 0) {
          this.messageStore.search(this.state.current, this.state.searchTerms);
        }
        else {
          this.messageStore.resetSearch();
        }
      },
      logout () {
        this.authStore.logout();
      }
    }
  }
</script>
