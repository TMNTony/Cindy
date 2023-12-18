<template>
  <div>
    <div v-for="(photo, index) in formattedImages" :key="photo._id" class="carousel-item" :class="{ 'active': index === activeIndex }">
      <div class="flex flex-row items-center justify-center">
        <button type="button" class="text-4xl" @click="prevImage">
          <i class="fas fa-angle-left"></i>
        </button>
        <img :src="photo.imgSrc" class="h-auto" :alt="photo.caption" />
        <button type="button" class="text-4xl" @click="nextImage">
          <i class="fas fa-angle-right"></i>
        </button>
      </div>
      <div class="flex-col">
        <div class="text-center font-header mt-2">{{ photo.caption }}</div>

        <div v-if="isAuthenticated" class="flex items-center justify-center mt-2">
          <div @click="deletePicture(photo._id)" class="items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
            Delete Picture
          </div>
        </div>
      </div>

    </div>
    <AddPic v-if="isAuthenticated" />
  </div>
</template>

<script>
import ImageService from "@/services/ImageService";
import AddPic from "@/components/AddPic.vue";


export default {
  name: "imageGallery",
  components: {ImageSlider, AddPic},
  data() {
    return {
      activeIndex: 0,
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
    nextImage() {
      this.activeIndex = (this.activeIndex + 1) % this.formattedImages.length;
    },
    prevImage() {
      this.activeIndex = (this.activeIndex - 1 + this.formattedImages.length) % this.formattedImages.length;
    },
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
.carousel-item {
  display: none;
  position: relative;
  height: 60vh;

}

.carousel-item.active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carousel-item img {
  height: 45vh;
  object-fit: cover;
}

.carousel-item button {
  background-color: #ffffff; /* Set your preferred background color */
  color: #333333; /* Set your preferred text color */
  border: 1px solid #cccccc; /* Add a border */
  padding: 10px; /* Adjust padding as needed */
  margin: 0 20vw; /* Add some space between buttons */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-item button:first-child {
  left: 10px; /* Set the left position of the previous button */
}

.carousel-item button:last-child {
  right: 10px; /* Set the right position of the next button */
}


</style>
