<template>
  <div class="bg-grey-50" id="about">
    <div
        class="container flex flex-col items-center py-16 md:py-20 lg:flex-row"
    >
      <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
        <h2
            class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
        >
          Who am I?
        </h2>
        <h4
            class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          I'm Cynthia Chambless, a Horn player and educator
        </h4>
        <button v-if="isAuthenticated"
            class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
            @click="toggleEditingAbout">{{ !editingAbout ? "Edit About" : "Close Editor" }}
        </button>
        <div v-if="editingAbout">
          <TextEditor
              class="mt-4"
              v-model="about"
              :content="about"
          />
          <button
              class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
              @click="updateAbout">Update About
          </button>
        </div>
        <p class="font-body leading-relaxed text-grey-20" v-if="!editingAbout" v-html="about" ></p>
        <router-link :to="{name: 'bio'}" class="pt-6 text-primary">Full Bio</router-link>

        <h4
            class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          My Mission Statement
        </h4>

        <button v-if="isAuthenticated"
            class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
            @click="toggleEditingMission">{{ !editingMission ? "Edit Mission" : "Close Editor" }}
        </button>
        <div v-if="editingMission">
          <TextEditor
              class="mt-4"
              v-model="mission"
              :content="mission">
          </TextEditor>
          <button
              class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
              @click="updateMission">Update Mission
          </button>
        </div>
        <p class="font-body leading-relaxed text-grey-20" v-if="!editingMission" v-html="mission" ></p>

        <div class="flex flex-col">
          <a class="pt-6 text-primary" href="http://www.tsoonline.org">Tuscaloosa Symphony Orchestra</a>
          <a class="pt-6 text-primary" href="https://www.hso.org">Huntsville Symphony Orchestra</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Bio from "/src/views/Bio.vue";
import TextEditor from "@/components/TextEditor.vue";
import ProfileService from "@/services/ProfileService";

export default {
  data() {
    return {
      isAuthenticated: this.$store.getters.isAuthenticated,
      about: this.bio.about,
      mission: this.bio.philosophy,
      editingAbout: false,
      editingMission: false
    }
  },
  components: {
    TextEditor,
    Bio,
  },
  props: {
    bio: Object
  },
  methods: {
    toggleEditingAbout() {
      this.editingAbout = !this.editingAbout
    },
    toggleEditingMission() {
      this.editingMission = !this.editingMission
    },
    updateAbout(){
      ProfileService.update_profile({about: this.about})
          .then(response => {
            this.editingAbout = false
          })
          .catch(err => {
            console.log(err)
          })
    },
    updateMission(){
      ProfileService.update_profile({philosophy: this.mission})
          .then(response => {
            this.editingMission = false
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
};
</script>

<style></style>
