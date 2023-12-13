<template>
  <div>
    <div class="flex items-center justify-center mb-4">
      <button
          class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          @click="togglePic"
      >
        {{ !createPic ? "Add Picture" : "Close" }}
      </button>
    </div>
    <form v-if="createPic" @submit.prevent="submitPic()">
      <!-- Add form fields for the blog post -->
      <div class="mb-4">
        <label for="caption" class="block text-sm font-medium text-gray-600">Caption:</label>
        <input type="text" id="title" v-model="picture.caption" class="mt-1 p-2 border rounded-md w-full"/>
      </div>
      <div class="flex items-center justify-center mb-4">
        <button
            class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
        >Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import ImageService from "@/services/ImageService";

export default {
  name: "addPic",
  data() {
    return {
      createPic: false,
      picture: {
        pictureURL: "",
        caption: ""
      },
    };
  },
  methods: {
    togglePic() {
      this.createPic = !this.createPic
    },
    submitPic() {
      ImageService.upload_image(this.picture)
          .then(() => {
            console.log("picture added successfully");
            this.$router.push({name: "media"});
          })
          .catch(err => {
            console.error("Error adding picture:", err);
          });
    },
  },
}
</script>
<style></style>