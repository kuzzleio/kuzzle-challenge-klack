<template>
  <span class="channel-menu-name">
    <span class="channel-menu-prefix">#</span>
    {{name}}
  </span>
</template>

<script>
  export default {
    props: ['name', 'searchTerms']
  }
</script>