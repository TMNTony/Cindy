<template>
  <div :class="background">
    <div class="container flex items-center justify-between">
      <div></div>
      <div v-if="!isSmallScreen" class="lg:block">
        <ul class="flex items-center">
          <li class="group pl-6">
            <router-link :to="{name: 'home'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Home
            </router-link>
            <span
                class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          <li class="group pl-6">
            <router-link :to="{name: 'bio'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Bio
            </router-link>
            <span
                class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <router-link :to="{name: 'media'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Media
            </router-link>

            <span
                class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <router-link :to="{name: 'studio'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Studio
            </router-link>

            <span
                class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>

          <li class="group pl-6">
            <router-link :to="{name: 'blog'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Blog
            </router-link>
            <span
                class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          <li class="group pl-6">
            <router-link :to="{name: 'bells'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Bell's Palsy
            </router-link>
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
          <img src="/src/assets/img/icon-close.svg" class="h-10 w-auto" alt=""/>
        </button>

        <ul class="mt-8 flex flex-col">
          <li class="py-2">
            <router-link :to="{name: 'home'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Home
            </router-link>
          </li>

          <li class="py-2">
            <router-link :to="{name: 'bio'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Bio
            </router-link>
          </li>

          <li class="py-2">
            <router-link :to="{name: 'media'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Media
            </router-link>
          </li>

          <li class="py-2">
            <router-link :to="{name: 'studio'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Studio
            </router-link>
          </li>


          <li class="py-2">
            <router-link :to="{name: 'blog'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Blog
            </router-link>
          </li>

          <li class="py-2">
            <router-link :to="{name: 'bells'}"
                         class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Bell's Palsy
            </router-link>
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
import {ref} from 'vue';
import {currentSection} from "../../SharedState.js";

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
        element.scrollIntoView({behavior: "smooth"});
      } else {
        this.$router.push({name: 'home'}).then(() => {
          // Wait for the route change to complete, then scroll to "Contact"
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({behavior: "smooth"});
          }
        })
      }
    },
    triggerMobileNavItem(id) {
      this.mobileMenu = false;
      this.triggerNavItem(id);
    },
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu;
    },
  }
  ,
  computed: {
    isSmallScreen() {
      // Check if the viewport width is less than your desired breakpoint (e.g., 768px)
      return window.innerWidth < 768;
    }
    ,
    background() {

      if (this.$route.path !== "/") {
        return "absolute top-0 z-50 w-full py-3 sm:py-5 bg-primary"
      } else {
        return "absolute top-0 z-50 w-full py-3 sm:py-5"
      }
    }
  }
  ,
}
;
</script>

<style></style>
