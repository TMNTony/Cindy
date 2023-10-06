<template>
  <div class="container py-16 md:py-20" id="portfolio">
            <h2
              class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              Photo Gallery
            </h2>
            <h3
              class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Cindy in action!
            </h3>

            <div
              class="mx-auto grid w-full grid-cols-2 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
            >
              <div v-for="photo in gallery" :key="photo.id" class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                  <img
                      :src="imageUrl(photo.pictureURL)"
                      class="w-96 shadow"
                      :alt=photo.id
                  />
              </div>
            </div>
          </div>
</template>

<script>

export default {

data(){
  return {
    gallery: [],
    schools: [],
    showModal: false,
    modalImageUrl: "",
  }
},
  methods: {
    getPhotos() {
      this.gallery = this.$store.getters.getPhotos;
    },
      imageUrl(imagePath) {
        return new URL(`/src/assets/img/${imagePath}`, import.meta.url)
      },
      openModal(imagePath) {
        this.modalImageUrl = new URL(`/src/assets/img/${imagePath}`, import.meta.url);
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
  },
  created() {
    this.getPhotos();
  },
}
</script>

<style>

</style>