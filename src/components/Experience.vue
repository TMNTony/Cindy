<template>
  <div class="container py-16 md:py-20" id="work">
    <h2
        class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      My experience
    </h2>
    <h3
        class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
    >
      Here's what I did before freelancing
    </h3>

    <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
              <span
                  class="absolute inset-y-0 left-2/5 ml-10 hidden w-0.5 bg-grey-40 md:block"
              ></span>
      <div v-for="experience in experiences" :key="experience.title">
        <div
            class="mt-8 flex flex-col text-center md:flex-row md:text-left"
        >
          <div class="md:w-2/5">
            <div class="flex justify-center md:justify-start">
                    <span class="shrink-0">
                      <img
                          :src="imageUrl(experience.icon)"
                          class="h-auto w-32"
                          alt=""
                      />
                    </span>
              <div class="relative ml-3 hidden w-full md:block">
                      <span
                          class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                      ></span>
              </div>
            </div>
          </div>
          <div class="md:w-3/5">
            <div class="relative flex md:pl-18">
                    <span
                        class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                    ></span>

              <div class="mt-1 flex">
                <i
                    class="bx bxs-right-arrow hidden text-primary md:block"
                ></i>
                <div class="md:-mt-1 md:pl-8">
                        <span class="block font-body font-bold text-grey-40"
                        >{{ experience.date }}</span
                        >
                  <span
                      class="block pt-2 font-header text-xl font-bold uppercase text-primary"
                  >{{ experience.title }}</span
                  >
                  <div class="pt-2">
                          <span class="block font-body text-black"
                          >{{experience.description}}</span
                          >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [],
    }
  },
  methods: {
    getExperiences() {
      this.experiences = this.$store.getters.getExperiences;
    },
    imageUrl(imagePath) {
      return new URL(`/src/assets/img/${imagePath}`, import.meta.url)
    },
  },
  created() {
    this.getExperiences();
  },
}
</script>

<style>

</style>