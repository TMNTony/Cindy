<template>
  <div class="bg-primary">
    <div class="container flex flex-col justify-between py-6 sm:flex-row">
      <div class="text-center font-body text-white md:text-left">
        <p>
          © Copyright 2023. Cynthia Chambless
        </p>
        <a  href="https://tonycarlsondeveloper.com" >Designed by Tony Carlson</a>
      </div>

      <div>
        <router-link v-if="!isAuthenticated" to="login" class="text-center font-body text-white md:text-left mr-4">Login</router-link>
        <button v-if="isAuthenticated" @click="logout" class="text-center font-body text-white md:text-left ml-4">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },

  methods: {
    logout() {
      this.$store.commit("LOGOUT");
    },
  },
};
</script>

<style></style>