<template>
  <div
      class="mx-auto grid w-full items-center   gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-3"
  >
    <div v-for="photo in formattedImages" :key="photo._id"
         class=" mx-auto  md:mx-0">

      <img
          :src="photo.imgSrc"
          class="w-96 shadow"
          :alt=photo.caption
      />
      <div class="text-center font-header">{{ photo.caption }}</div>
      <div v-if="isAuthenticated" class="flex items-center justify-center">
        <button @click="deletePicture(photo._id)"
                class="mt-6 items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
        >Delete Picture
        </button>
      </div>
    </div>
  </div>
  <AddPic v-if="isAuthenticated"/>
</template>

<script>
import ImageService from "@/services/ImageService";
import AddPic from "@/components/AddPic.vue";


export default {
  name: "imageGallery",
  components: {AddPic},
  data() {
    return {
      isAuthenticated: this.$store.getters.isAuthenticated,
      createPic: false,
      gallery: [],
    }
  },
  computed: {
    formattedImages() {
      return this.gallery.map(photo => {
        return {
          ...photo,
          imgSrc: this.getBase64Image(photo.img.imgData.data),
        };
      });
    },
  },
  methods: {
    togglePic() {
      this.createPic = !this.createPic
    },
    getPhotos() {
      ImageService.get_images()
          .then(response => {
            this.gallery = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    async deletePicture(id) {
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
    getBase64Image(buffer) {
      const binaryString = buffer.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
      const base64String = btoa(binaryString);
      return `data:image/jpeg;base64,${base64String}`;
    },

  },
  created() {
    this.getPhotos();

  },
}
</script>

<style>

</style>
