<template>
  <div class="bg-primary">
    <div class="container flex flex-col justify-between py-6 sm:flex-row">
      <p class="text-center font-body text-white md:text-left">
        © Copyright 2023. Cynthia Chambless
      </p>
      <div>
        <router-link v-if="!isAuthenticated" to="login" class="text-center font-body text-white md:text-left mr-4">Login</router-link>
        <router-link to="register" class="text-center font-body text-white md:text-left mr-4">Register</router-link>
        <button v-if="isAuthenticated" @click="logout" class="text-center font-body text-white md:text-left ml-4">Logout </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isAuthenticated: this.$store.getters.isAuthenticated
    }
  },

  methods: {
    logout(){
      this.$store.commit("LOGOUT");
    }
  }

};
</script>

<style></style>
