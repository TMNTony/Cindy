<template>
  <div>
    <div
        class="mx-auto grid w-full items-center   gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
    >
      <div v-for="video in videos" :key="video.id"
           class=" mx-auto  md:mx-0">
        <div class="relative aspect-w-16 aspect-h-9">
          <iframe
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
import VideoService from "@/services/VideoService";
import AddVid from "@/components/AddVid.vue";

export default {
  name: "videoGallery",

  components: {AddVid},

  data() {
    return {
      videos: [],

    }
  },
  methods: {
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
  },
  created() {
    this.getVideos();

  },
}
</script>

<style>

</style>