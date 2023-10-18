<template>
  <div class="container py-16 md:py-20" id="portfolio">
    <h2
        class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      Photo Gallery
    </h2>
    <div
        class="mx-auto grid w-full items-center   gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-3"
    >
      <div v-for="photo in gallery" :key="photo.id"
           class=" mx-auto transform transition-all hover:scale-105 md:mx-0">

        <img
            :src="imageUrl(photo.pictureURL)"
            class="w-96 shadow"
            :alt=photo.id
        />
        <div class="text-center font-header">{{ photo.caption }}</div>

      </div>
    </div>
    <h2
        class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      Videos
    </h2>
    <div
        class="mx-auto grid w-full items-center   gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
    >
      <div v-for="video in videos" :key="video.id"
           class=" mx-auto transform transition-all hover:scale-105 md:mx-0">
        <div class="relative aspect-w-16 aspect-h-9">
        <iframe
            width="560"
            height="315"
            :src="video.videoURL"
            allowfullscreen
        ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      gallery: [],
      videos: [],
      showModal: false,
      modalImageUrl: "",
    }
  },
  methods: {
    getPhotos() {
      this.gallery = this.$store.getters.getPhotos;
    },
    getVideos() {
      this.videos = this.$store.getters.getVideos;
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
    this.getVideos();
  },
}
</script>

<style>

</style>