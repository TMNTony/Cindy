<template>
  <div :class="{ 'max-h-screen overflow-hidden': mobileMenu }" class="relative">
    <div id="main" class="relative">
      <landing-component/>
      <about-component v-if="Object.keys(bio).length > 0"  :bio = "bio" />
      <contact-component id="contact"/>

    </div>
  </div>
</template>

<script>

import LandingComponent from "../components/Landing.vue";
import AboutComponent from "../components/About.vue";
import ContactComponent from "../components/Contact.vue";
import ProfileService from "../services/ProfileService";

export default {
  name: "home-page",
  components: {

    LandingComponent,
    AboutComponent,
    ContactComponent,

  },
  data() {
    return {
      mobileMenu: false,
      bio: {}
    };
  },
  methods: {
    fetch_info() {
      ProfileService.get_profile()
          .then(response => {
            this.bio = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu; // Toggle mobileMenu property
    },
    closeMobileMenu() {
      this.mobileMenu = false; // Close the mobile menu
    },
    triggerNavItem(id) {
      // Define the $scroll function here or use a scroll library
      // For example, using the native browser scrollIntoView method:
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior: "smooth"});
      }
    },
    triggerMobileNavItem(id) {
      this.mobileMenu = false;
      this.triggerNavItem(id);
    },
  },
  mounted() {
    this.fetch_info()
  }
};
</script>
