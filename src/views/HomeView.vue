<template>
  <div :class="{ 'max-h-screen overflow-hidden': mobileMenu }" class="relative">
    <header-component />
    <div id="main" class="relative">
      <landing-component />
      <about-component />
      <services-component />
      <portfolio-component />
      <clients-component />
      <experience-component />
      <statistics-component />
      <hobbies-component />
      <contact-component />
      <footer-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue";
import LandingComponent from "../components/Landing.vue";
import FooterComponent from "../components/Footer.vue";
import AboutComponent from "../components/About.vue";
import ServicesComponent from "../components/Services.vue";
import PortfolioComponent from "../components/Portfolio.vue";
import ClientsComponent from "../components/Clients.vue";
import ExperienceComponent from "../components/Experience.vue";
import StatisticsComponent from "../components/Statistics.vue";
import HobbiesComponent from "../components/Hobbies.vue";
import ContactComponent from "../components/Contact.vue";

export default {
  name: "home-page",
  components: {
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ClientsComponent,
    ExperienceComponent,
    StatisticsComponent,
    HobbiesComponent,
    ContactComponent,
  
  },
  data() {
    return {
      mobileMenu: false,
    };
  },
  methods: {
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
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    triggerMobileNavItem(id) {
      this.mobileMenu = false;
      this.triggerNavItem(id);
    },
  },
};
</script>
