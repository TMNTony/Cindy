<template>
  <div :class="{ 'max-h-screen overflow-hidden': mobileMenu }" class="relative">
    <div id="main" class="relative">
      <div class="bg-grey-50" id="about">
        <div
            class="container flex flex-col items-center py-16 md:py-20 lg:flex-row"
        >
          <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Full Biography
            </h4>
            <p v-if="!editingBio" class="pt-6 font-body leading-relaxed text-grey-20" v-html="profile.bio"></p>
            <button v-if="isAuthenticated"
                class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
                @click="toggleEditingBio">{{ !editingBio ? "Edit Bio" : "Close Editor" }}
            </button>
            <div v-if="editingBio">
              <TextEditor
                  class="mt-4"
                  v-model="profile.bio"
                  :content="profile.bio"
              />
              <button
                  class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
                  @click="updateBio">Update Bio
              </button>
            </div>
            <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Student Achievements
            </h4>
            <p v-if="!editingAwards" class="pt-6 font-body leading-relaxed text-grey-20" v-html="profile.achievements"></p>
            <button v-if="isAuthenticated"
                class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
                @click="toggleEditingAwards">{{ !editingAwards ? "Edit Achievements" : "Close Editor" }}
            </button>
            <div v-if="editingAwards">
              <TextEditor
                  class="mt-4"
                  v-model="profile.achievements"
                  :content="profile.achievements"
              />
              <button
                  class="mt-6 mb-4 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
                  @click="updateAwards">Update Achievements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileService from "@/services/ProfileService";
import TextEditor from "@/components/TextEditor.vue";

export default {
  name: 'bio',
  data() {
    return {
      isAuthenticated: this.$store.getters.isAuthenticated,
      mobileMenu: false,
      editingBio: false,
      editingAwards: false,
      profile: {}
    }
  },
  components: {TextEditor},
  methods: {
    toggleEditingBio() {
      this.editingBio = !this.editingBio
    },
    toggleEditingAwards() {
      this.editingAwards = !this.editingAwards
    },
    updateBio() {
      ProfileService.update_profile({bio: this.profile.bio})
          .then(res => {
            this.editingBio = false
          })
          .catch(err => {
            console.log(err)
          })
    },
    updateAwards() {
      ProfileService.update_profile({achievements: this.profile.achievements})
          .then(res => {
            this.editingAwards = false
          })
          .catch(err => {
            console.log(err)
          })
    },
    fetch_profile() {
      ProfileService.get_profile()
          .then(res => {
            this.profile = res.data
          })
          .catch(err => {
            console.log(err)
          })
    }
  },
  created() {
    this.fetch_profile()
  }
}
</script>