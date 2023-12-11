<template>
  <div class="bg-grey-50" id="blog">
    <div class="container py-16 md:py-20">
      <h2
          class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >ADD VIDEO
      </h2>
      <div
          class="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
      >
        <form @submit.prevent="submitVid()">
          <div class="mb-4">
            <label for="caption" class="block text-sm font-medium text-gray-600">Video URL:</label>
            <input type="text" id="url" v-model="video.videoURL" class="mt-1 p-2 border rounded-md w-full"/>
          </div>
          <div class="mb-4">
            <label for="caption" class="block text-sm font-medium text-gray-600">Caption:</label>
            <input type="text" id="caption" v-model="video.caption" class="mt-1 p-2 border rounded-md w-full"/>
          </div>
          <button
              class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          >Add Video
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import VideoService from "@/services/VideoService";

export default {
  name: "addVideo",
  data() {
    return {
      video: {
        videoURL: "",
        caption: ""
      },
    };
  },
  methods: {
    submitVid() {
      VideoService.create_video(this.video)
          .then(() => {
            console.log("Video added successfully");
            this.$router.push({name: "media"});
          })
          .catch(err => {
            console.error("Error adding video:", err);
          });
    },
  }
}
</script>
<style></style>