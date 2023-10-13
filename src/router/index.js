import { createRouter as createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

// Import components
import HomeView from '../views/HomeView.vue';
import Bio from '../views/Bio.vue'
import BellsPalsy from "../views/BellsPalsy.vue";
import Media from "../views/Media.vue";
import Blog from "../views/Blog.vue";
import Studio from "../views/Studio.vue";

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Bio',
    name: 'bio',
    component: Bio,
  },
  {
    path: '/Bells-Palsy',
    name: 'bells',
    component: BellsPalsy,
  },
  {
    path: '/Media',
    name: 'media',
    component: Media,
  },
  {
    path: '/Blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/Studio',
    name: 'studio',
    component: Studio,
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to) => {

  // Get the Vuex store
  const store = useStore();
});

export default router;
