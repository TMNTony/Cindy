<template>
  <div>
    <div class="flex items-center justify-center mb-4">
    <button
        class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
        @click="toggleCreate"
    >
      {{ !createVid ? "Add Video" : "Close" }}
    </button>
    </div>
    <form v-if="createVid" @submit.prevent="submitVid()">
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
      createVid: false
    };
  },
  methods: {
    toggleCreate() {
      this.createVid = !this.createVid
    },
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