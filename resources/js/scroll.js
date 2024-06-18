import {createRouter} from 'vue-router';

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
      // always scroll 10px above the element #main
      return {
        // could also be
        // el: document.getElementById('main'),
        el: '#main',
        // 10px above the element
        top: 10,
      }
    },
  })
  