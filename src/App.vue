<template>
  <div id="app" class="min-h-screen grid grid-rows-[auto,1fr,auto]">
    <AppHeader class="row-span-1"></AppHeader>
    <router-view  />
    <AppFooter class="row-span-3"></AppFooter>
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
