<template>
  <div class="bg-grey-50" id="bells">
    <div class="container py-16 md:py-20">
      <h4
          class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        My Bell's Palsy Journey
      </h4>
      <p class="font-body leading-relaxed text-grey-20" v-if="!editing" v-html="content"></p>
      <button v-if="isAuthenticated" class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20" @click="toggleEditing">{{editing ? "Close Editor" : "Update Journey" }}</button>
      <div v-if="editing">
        <TextEditor
            class="mt-4"
            v-model="content"
            :content="content"
        />
        <button class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20" @click="updateContent">Update</button>
      </div>
    </div>
  </div>

</template>

<script>
import bellsService from "@/services/BellsService";
import TextEditor from "@/components/TextEditor.vue";

export default {
  name: "bells",
  components: {TextEditor},
  data() {
    return {
      isAuthenticated: this.$store.getters.isAuthenticated,
      mobileMenu: false,
      editing: false,
      content: "",
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu; // Toggle mobileMenu property
    },
    toggleEditing() {
      this.editing = !this.editing
    },
    getContent() {
      bellsService.get_content()
          .then(response => {
            this.content = response.data.content
          })
          .catch(err => {
            console.log(err)
          })
    },
    updateContent() {
      bellsService.update_content({content: this.content})
          .then(response => {
            this.content = response.data.content
            this.editing = false;
          })
          .catch(err => {
            console.log(err)
          })
    },
  },
  created() {
    this.getContent()
  },
}


</script>