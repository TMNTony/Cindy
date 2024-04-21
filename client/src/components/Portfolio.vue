<template>
  <div class="container py-16 md:py-20" id="portfolio">
    <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
      Photo Gallery
    </h2>
    <ImageGallery/>
    <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
      Videos
    </h2>
    <VideoGallery/>
  </div>
</template>

<script>
import ImageGallery from "@/components/Images.vue";
import VideoGallery from "@/components/Videos.vue";

export default {
  components: {VideoGallery, ImageGallery},

}
</script>

