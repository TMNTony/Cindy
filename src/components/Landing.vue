<template>
  <div
      class="relative bg-cover bg-center bg-no-repeat py-8"
      :style="{ backgroundImage: 'url(' + imageUrl('bg-hero.jpg') + ')' }"
  >
    <div
        class="custom-bg"
    ></div>

    <div
        class="container relative z-20 pb-12 pt-20 sm:pb-48 sm:pt-56 lg:pb-48 lg:pt-64"
    >
      <div class="flex flex-col items-center justify-center lg:flex-row">
        <div class="rounded-full  border-primary shadow-xl">
          <img
              :src="imageUrl('cindy.jpg')"
              class="h-48 rounded-full sm:h-56"
              alt="Cindy"
          />
        </div>
        <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
          <h1
              class="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
          >
            Hello I'm Cynthia Chambless!
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imageUrl(imagePath) {
      return new URL(`/src/assets/img/${imagePath}`, import.meta.url)
    },
  }
};
</script>

<style>
.custom-bg {
  background-color: rgba(85, 64, 174, 0.8);
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
