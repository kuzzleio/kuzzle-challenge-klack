<template>
  <li class="channel" v-link-active @click="selectChannel">
    <a class="channel-name" v-link="{ name: 'chat', params: { channel: name }, activeClass: 'active'}">
      <span>
        <span class="prefix">#</span>
        {{name}}
      </span>
    </a>
  </li>
</template>

<script>
  export default {
    props: ['name', 'active'],
    methods: {
      selectChannel () {
        this.$router.go({ name: 'chat', params: { channel: this.name }});
      }
    }
  }
</script>