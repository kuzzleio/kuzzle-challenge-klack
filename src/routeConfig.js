import Home from './Home';
import Chat from './Chat';
import Login from './Login';
import userStore from './store/user';

export function configRouter (router) {
  router.map({
    '/': {
      name: 'home',
      component: Home,
      auth: true,
      subRoutes: {
        ':channel': {
          name: 'chat',
          component: Chat
        }
      }
    },
    '/login': {
      name: 'login',
      component: Login
    }
  });

  router.beforeEach(function (transition) {
    if (transition.to.auth && !userStore.isAuthenticated()) {
      transition.redirect('/login')
    }
    else {
      transition.next();
    }
  });
}

