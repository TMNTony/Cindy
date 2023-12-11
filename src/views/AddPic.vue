<template>
  <div class="bg-grey-50" id="blog">
    <div class="container py-16 md:py-20">
      <h2
          class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >ADD PICTURE
      </h2>
      <div
          class="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
      >
        <form @submit.prevent="submitPic()">
          <!-- Add form fields for the blog post -->
          <div class="mb-4">
            <label for="caption" class="block text-sm font-medium text-gray-600">Caption:</label>
            <input type="text" id="title" v-model="picture.caption" class="mt-1 p-2 border rounded-md w-full"/>
          </div>
          <button
              class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          >Add Picture
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import PictureService from "@/services/PictureService";

export default {
  name: "addPic",
  data() {
    return {
      picture: {
        pictureURL: "",
        caption: ""
      },
    };
  },
  methods: {
    submitPic() {
      PictureService.create_picture(this.picture)
          .then(() => {
            console.log("picture added successfully");
            this.$router.push({name: "media"});
          })
          .catch(err => {
            console.error("Error adding picture:", err);
          });
    },
  }
}
</script>
<style></style>