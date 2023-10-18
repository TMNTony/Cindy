<template>
  <div class="bg-grey-50" id="bells">
    <div class="container py-16 md:py-20">
      <h4
          class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        My Bell's Palsy Journey
      </h4>
      <p class="pt-6 font-body leading-relaxed text-grey-20 h-screen">
        This page is currently under development, but will detail my struggle with and recovery from Bell's
        Palsy.</p>
      <p class="pt-6 font-body leading-relaxed text-grey-20 h-screen">

        Bell's palsy is a medical condition that causes sudden, temporary weakness or paralysis of the muscles on
        one side of the face. It occurs when the facial nerve, which controls the muscles of the face, becomes
        inflamed. The exact cause of Bell's palsy is not well understood, but it is thought to be related to viral
        infections.</p>
    </div>
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "bells",
  data() {
    return {
      mobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu; // Toggle mobileMenu property
    },
  }
}


</script>