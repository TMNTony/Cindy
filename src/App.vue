<template>
  <div id="app" class="h-screen">
    <AppHeader></AppHeader>
    <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "../src/components/Header.vue";
import AppFooter from "../src/components/Footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
