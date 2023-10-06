<template>
  <div class="absolute top-0 z-50 w-full py-3 sm:py-5">
    <div class="container flex items-center justify-between">
      <div></div>
      <div v-if="!isSmallScreen" class="lg:block">
        <ul class="flex items-center">
          <li class="group pl-6">
            <span
              @click="triggerNavItem('about')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >About</span
            >
            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('services')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Services</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('portfolio')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Portfolio</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('clients')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Clients</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('work')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Work</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('statistics')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Statistics</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('blog')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Blog</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('contact')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Contact</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
        </ul>
      </div>
      <div v-if="isSmallScreen" class="block lg">
        <button @click="toggleMobileMenu()">
          <i class="bx bx-menu text-4xl text-white"></i>
        </button>
      </div>
    </div>
    <div
      v-if="mobileMenu"
      class="lg pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity"
      :class="{ 'pointer-events-auto opacity-100': mobileMenu }"
    >
      <div
        class="absolute right-0 min-h-screen w-2/3 bg-primary px-8 py-4 shadow md:w-1/3"
      >
        <button
          class="absolute right-0 top-0 mr-4 mt-4"
          @click="mobileMenu = false"
        >
          <img src="src/assets/img/icon-close.svg" class="h-10 w-auto" alt="" />
        </button>

        <ul class="mt-8 flex flex-col">
          <li class="py-2">
            <span
              @click="triggerMobileNavItem('about')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >About</span
            >
          </li>

          <li class="py-2">
            <span
              @click="triggerMobileNavItem('services')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Services</span
            >
          </li>

          <li class="py-2">
            <span
              @click="triggerMobileNavItem('portfolio')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Portfolio</span
            >
          </li>

          <li class="py-2">
            <span
              @click="triggerMobileNavItem('clients')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Clients</span
            >
          </li>

          <li class="py-2">
            <span
              @click="triggerMobileNavItem('work')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Work</span
            >
          </li>

          <li class="py-2">
            <span
              @click="triggerMobileNavItem('statistics')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Statistics</span
            >
          </li>

          <li class="py-2">
            <span
              @click="triggerMobileNavItem('blog')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Blog</span
            >
          </li>

          <li class="py-2">
            <span
              @click="triggerMobileNavItem('contact')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Contact</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { currentSection } from "../../SharedState.js";
export default {
  data() {
    return {
      mobileMenu: false,
    };
  },

  methods: {
    triggerNavItem(id) {
      // Define the $scroll function here or use a scroll library
      // For example, using the native browser scrollIntoView method:
      currentSection.value = id;

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      console.log(currentSection.value);
    },
    triggerMobileNavItem(id) {
      this.mobileMenu = false;
      this.triggerNavItem(id);
    },
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
  },
  computed: {
    isSmallScreen() {
      // Check if the viewport width is less than your desired breakpoint (e.g., 768px)
      return window.innerWidth < 768;
    },
  },
};
</script>

<style></style>
