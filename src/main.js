import { createApp } from 'vue'
import newApp from './App.vue'
import { createStore } from './store'
import router from './router'
import axios from 'axios'
import "@fortawesome/fontawesome-free/css/all.min.css";

/* sets the base url for server API communication with axios */
axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API;

let currentToken = localStorage.getItem('token');
let currentUser = JSON.parse(localStorage.getItem('user'));

if (currentToken) {
  // Set token axios requests
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

// Create the Vuex store passing in the stored credentials
const store = createStore(currentToken, currentUser);

const app = createApp(newApp);
app.use(store);
app.use(router);
app.mount('#app');