<template>
  <div class="absolute top-0 z-50 w-full py-3 sm:py-5 ">
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
              >Gallery</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <span
              @click="triggerNavItem('clients')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Schools</span
            >

            <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>Windows PowerShell
          Copyright (C) Microsoft Corporation. All rights reserved.
          Try the new cross-platform PowerShell https://aka.ms/pscore6

          PS C:\Users\Tony\Documents\Coding\Cindy> npm install @emailjs/browser --save

          added 1 package, and audited 514 packages in 2s

          115 packages are looking for funding
          run `npm fund` for details

          found 0 vulnerabilities

          > cindy@0.1.0 build
          > npm run css -- --env 'production'


          > cindy@0.1.0 css
          > postcss assets/styles/main.css -o assets/styles/main.min.css --verbose --env 'production'


          Input Error: You must pass a valid list of files to parse
          PS C:\Users\Tony\Documents\Coding\Cindy> npm run buildvite

          > cindy@0.1.0 buildvite
          > vite build

          vite v3.2.7 building for production...
          ✓ 11 modules transformed.
          [vite]: Rollup failed to resolve import "src/assets/img/icon-close.svg" from "src/views/Bio.vue".
          This is most likely unintended because it can break your application at runtime.
          If you do want to externalize this module explicitly add it to
          `build.rollupOptions.external`
          error during build:
          Error: [vite]: Rollup failed to resolve import "src/assets/img/icon-close.svg" from "src/views/Bio.vue".
          This is most likely unintended because it can break your application at runtime.
          If you do want to externalize this module explicitly add it to
          `build.rollupOptions.external`
          at onRollupWarning (file:///C:/Users/Tony/Documents/Coding/Cindy/node_modules/vite/dist/node/chunks/dep-2faf2534.js:45909:19)
          at onwarn (file:///C:/Users/Tony/Documents/Coding/Cindy/node_modules/vite/dist/node/chunks/dep-2faf2534.js:45680:13)
          at Object.onwarn (file:///C:/Users/Tony/Documents/Coding/Cindy/node_modules/rollup/dist/es/shared/rollup.js:23263:13)
          at ModuleLoader.handleResolveId (file:///C:/Users/Tony/Documents/Coding/Cindy/node_modules/rollup/dist/es/shared/rollup.js:22158:26)
          at file:///C:/Users/Tony/Documents/Coding/Cindy/node_modules/rollup/dist/es/shared/rollup.js:22119:26
          PS C:\Users\Tony\Documents\Coding\Cindy>


          <li class="group pl-6">
            <span
              @click="triggerNavItem('statistics')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Awards</span
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
          <img src="/src/assets/img/icon-close.svg" class="h-10 w-auto" alt="" />
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
              @click="triggerMobileNavItem('statistics')"
              class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Awards</span
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
