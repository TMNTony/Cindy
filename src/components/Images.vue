<template>
  <LightGallery
      class="flex flex-wrap items-center justify-center"
      :settings="{ plugins: plugins, dynamicEl: gallery }"
      :onInit="onInit"
  >
      <a v-for="photo in gallery"
         data-lg-size="1406-1390"
          class="gallery-item"
          :data-src='photo.imgSrc'
          :data-sub-html=photo.caption
      >
        <img class="img-responsive custom-image" :src="photo.imgSrc" alt="" />
        <div v-if="isAuthenticated" class="flex items-center justify-center mt-4">
          <div @click="deletePicture(photo._id)"
               class="delete-button rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20 mb-4">
            Delete Picture
          </div>
        </div>
      </a>


  </LightGallery>
  <AddPic v-if="isAuthenticated"/>
</template>

<script>
import ImageService from "@/services/ImageService";
import AddPic from "@/components/AddPic.vue";
import LightGallery from 'lightgallery/vue/LightGalleryVue.umd'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

let lightGallery = null

export default {
  name: "imageGallery",
  components: {AddPic, LightGallery},

  watch: {
    gallery(newVal, oldVal) {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },

  data: () => ({
    plugins: [lgZoom, lgThumbnail],
    createPic: false,
    gallery: [],
  }),

  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    onInit(detail) {
      lightGallery = detail.instance
    },
    togglePic() {
      this.createPic = !this.createPic
    },
    getPhotos() {
      ImageService.get_images()
          .then(response => {
            this.gallery = response.data;
            this.formatImages()
          })
          .catch(err => {
            console.log(err);
          });
    },
    formatImages() {
      this.gallery = this.gallery.map(photo => ({
        ...photo,
        imgSrc: this.getBase64Image(photo.img.imgData.data),
      }));
    },
    async deletePicture(id) {
      try {
        const response = await ImageService.delete_image(id);
        if (response.status === 200) {
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
  mounted() {

    this.getPhotos();
  },
}
</script>

<style>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';


.custom-image {
  height: 240px;
  width: 240px;
  margin: 1rem;
}
</style>
