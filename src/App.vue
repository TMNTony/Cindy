<template>
  <div id="app" class="min-h-screen grid">
    <AppHeader></AppHeader>
    <router-view class="flex-1" />
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
