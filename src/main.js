import {} from './style/global.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {configRouter} from './routeConfig';

import userStore from './store/user';

Vue.use(VueRouter);
Vue.config.debug = true;

var App = Vue.extend({});
export var router = new VueRouter();

configRouter(router);

userStore.getCurrentUser(function () {
  router.start(App, '#app');
});

