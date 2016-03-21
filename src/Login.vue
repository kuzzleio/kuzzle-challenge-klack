<template>
  <form id="login" method="post" @submit.prevent="login">
    <span class="title"># Klack</span>
    <div id="block">
      <input v-model="username" type="text" name="username" id="username" placeholder="Username" class="input-box-text" required/>
      <input v-model="password" type="password" name="password" id="password" placeholder="Password" class="input-box-text" required />
    </div>
    <button type="submit" class="login">Login</button>

    <p class="error" v-if="state.errorLogin">{{state.errorLogin}}</p>
  </form>
</template>

<script>
  import {} from './style/login.css';
  import userStore from './store/user';
  import authStore from './store/auth';

  export default {
    data () {
      return {
        username: null,
        password: null,
        state: authStore.state
      }
    },
    methods: {
      login () {
        authStore.login(this.username, this.password);
      }
    }
  }
</script>
