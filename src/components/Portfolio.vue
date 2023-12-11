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
        <div class="flex items-center justify-center">
          <button @click="deletePicture()"
                  class="mt-6 items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          >Delete Picture
          </button>
        </div>
      </div>

    </div>
    <div class="flex items-center justify-center mb-4">
      <router-link :to="{name: 'addPicture'}"
                   class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
        Add Picture
      </router-link>
    </div>
    <h2
        class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      Videos
    </h2>
    <div
        class="mx-auto grid w-full items-center   gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
    >
      <div v-for="video in videos" :key="video._id"
           class=" mx-auto  md:mx-0">
        <div class="relative aspect-w-16 aspect-h-9 transform transition-all hover:scale-105">
          <iframe
              width="560"
              height="315"
              :src="video.videoURL"
              allowfullscreen
          ></iframe>
        </div>
        <div class="flex items-center justify-center">
          <button @click="deleteVideo(video._id)"
                  class="mt-6 items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          >Delete Video
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <router-link :to="{name: 'addVideo'}"
                   class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
        Add Video
      </router-link>
    </div>
  </div>
</template>

<script>
import PictureService from "@/services/PictureService";
import VideoService from "@/services/VideoService";

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
      PictureService.get_pictures()
          .then(response => {
            this.gallery = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    getVideos() {
      VideoService.get_videos()
          .then(response => {
            this.videos = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    async deleteVideo(id) {
      try {
        const response = await VideoService.delete_video(id);
        if (response.status === 200) {
          // Remove the deleted video from the local data
          this.videos = this.videos.filter(video => video._id !== id);
        }
      } catch (error) {
        console.error("Error deleting video:", error);
      }
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