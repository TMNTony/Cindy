<template>
  <div class="container py-16 md:py-20" id="login">
    <form v-on:submit.prevent="login" class="flex flex-col items-center justify-center">
      <div role="alert" v-if="invalidCredentials" class="mb-4 text-red-500">
        Invalid username and password!
      </div>
      <div class="form-input-group flex flex-col items-start mb-4">
        <label for="username" class="mb-1">Username:</label>
        <input type="text" id="username" v-model="user.username" required autofocus class="p-2 border rounded-md w-full"/>
      </div>
      <div class="form-input-group flex flex-col items-start mb-4">
        <label for="password" class="mb-1">Password:</label>
        <input type="password" id="password" v-model="user.password" required class="p-2 border rounded-md w-full"/>
      </div>
      <div>
        <button class="mt-6 items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  components: {},
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login() {
      authService
          .login(this.user)
          .then(response => {
            if (response.status === 200) {
              this.$store.commit("SET_AUTH_TOKEN", response.data.token);
              this.$store.commit("SET_USER", response.data.user);
              this.$router.push("/");
            }
          })
          .catch(error => {
            const response = error.response;

            if (response.status === 401) {
              this.invalidCredentials = true;
            }
          });
    }
  }
};
</script>
