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
      <div v-for="photo in gallery" :key="photo._id"
           class=" mx-auto transform transition-all hover:scale-105 md:mx-0">

        <img
            :src="getBase64Image(photo.img.imgData)"
            class="w-96 shadow"
            :alt=photo.name
        />
        <div class="text-center font-header">{{ photo.name }}</div>
        <div class="flex items-center justify-center">
          <button @click="deletePicture(photo._id)"
                  class="mt-6 items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          >Delete Picture
          </button>
        </div>
      </div>
    </div>
    <AddPic/>
    <h2
        class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      Videos
    </h2>
    <div
        class="mx-auto grid w-full items-center   gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
    >
      <div v-for="video in videos" :key="video.id"
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
    <AddVid/>
  </div>
</template>

<script>
import ImageService from "@/services/ImageService";
import VideoService from "@/services/VideoService";
import AddPic from "@/components/AddPic.vue";
import AddVid from "@/components/AddVid.vue";

export default {
  components: {AddPic, AddVid},

  data() {
    return {
      createPic: false,
      picture: {
        url: "",
        caption: ""
      },
      gallery: [],
      videos: [],
      showModal: false,
      modalImageUrl: "",
    }
  },
  methods: {
    togglePic(){
      this.createPic = ! this.createPic
    },
    getPhotos() {
      ImageService.get_images()
          .then(response => {
            this.gallery = response.data
            console.log(this.gallery.length)
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
    async deletePicture(id){
      try {
        const response = await ImageService.delete_image(id);
        if (response.status === 200) {
          // Remove the deleted video from the local data
          this.gallery = this.gallery.filter(image => image._id !== id);
        }
      } catch (error) {
        console.error("Error deleting video:", error);
      }
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
    getImageUrl(image) {
      if (!image || !image.img || !image.img.imgData || !image.contentType) {
        // Handle missing or incorrect properties
        console.log("incorrect properties")
        return '';
      }

      const imageData = image.img.imgData.data;
      if (!Array.isArray(imageData) || imageData.length === 0) {
        // Handle invalid image data
        console.log("invalid image data")
        return '';
      }

      const base64String = btoa(String.fromCharCode(...new Uint8Array(imageData)));
      return `data:${image.contentType};base64,${base64String}`;
    },
    openModal(imagePath) {
      this.modalImageUrl = new URL(`/src/assets/img/${imagePath}`, import.meta.url);
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

    getBase64Image(buffer) {
      return `data:image/jpeg;base64,${buffer.toString('base64')}`;
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