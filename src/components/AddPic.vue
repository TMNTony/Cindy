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
    <form v-if="createPic" @submit.prevent="submitPic()" enctype="multipart/form-data">
      <!-- Add form fields for the blog post -->
      <div class="mb-4">
        <label for="caption" class="block text-sm font-medium text-gray-600">Caption:</label>
        <input type="text" id="title" v-model="caption" class="mt-1 p-2 border rounded-md w-full"/>
      </div>
      <div class="mb-4">
        <label for="file" class="block text-sm font-medium text-gray-600">Image File:</label>
        <input type="file" id="file" ref="fileInput" @change="onFileChange" class="mt-1 p-2 border rounded-md w-full"/>
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
      caption: "",
      selectedFile: null
    };
  },
  methods: {
    togglePic() {
      this.createPic = !this.createPic
    },
    async submitPic() {
      if (!this.selectedFile) {
        console.error('No file selected');
        return;
      }

      let formData = new FormData();
      formData.append('caption', this.caption);
      formData.append('image', this.selectedFile);

      ImageService.upload_image(formData)
          .then(() => {
            this.caption = "";
            this.selectedFile = null;
            this.$refs.fileInput.value = "";
            this.createPic = false
          })
          .catch((err) => {
            console.error("Error adding picture:", err);
          });
    },
    onFileChange(event) {
      this.selectedFile = event.target.files[0]
    }
  }
}
</script>
<style></style>