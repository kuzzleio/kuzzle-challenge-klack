<template>
  <img :src="picturePath" class="user-menu-profile-pic" />
</template>

<script>
  import userStore from '../store/user'

  export default {
    props: ['pictureId'],
    computed: {
      picturePath: function () {
        return '/static/team/' + paddy(this.pictureId, 3) + '_250x250.png'
      }
    }
  }

  function paddy (n, p, c) {
    var padChar = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(padChar);
    return (pad + n).slice(-pad.length);
  }
</script>
