import { createRouter as createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'

// Import components
import HomeView from '../views/HomeView.vue';
import Bio from '../views/Bio.vue'
import BellsPalsy from "../views/BellsPalsy.vue";
import Media from "../views/Media.vue";
import Blog from "../views/Blog.vue";
import Studio from "../views/Studio.vue";
import AddPost from "../views/AddPost.vue"
import Post from "../views/Post.vue";
import UpdatePost from "../views/UpdatePost.vue";
import AddVideo from "../components/AddVid.vue";
import AddPic from "../components/AddPic.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

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
    path: '/addVideo',
    name: 'addVideo',
    component: AddVideo,
  },
  {
    path: '/addVPicture',
    name: 'addPicture',
    component: AddPic,
  },
  {
    path: '/Blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/post/:id',
    name: 'blogPost',
    component: Post,
  },
  {
    path: '/post/:id',
    name: 'updatePost',
    component: UpdatePost,
  },
  {
    path: '/Studio',
    name: 'studio',
    component: Studio,
  },
  {
    path: '/AddPost',
    name: 'addPost',
    component: AddPost,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresAuth: false
    }
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
