<template>
  <div class="pt-5">
    <div class="container py-6 md:py-10">
      <div class="mx-auto max-w-4xl">
        <div class="">
          <h1
              class="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl"
          >
            {{ post.title }}
          </h1>
          <div class="flex items-center pt-5 md:pt-10">
            <div>
            </div>
            <div class="pl-5">
          <span class="block font-body text-xl font-bold text-grey-10"
          >By Cynthia Chambless</span
          >
              <span class="block pt-1 font-body text-xl font-bold text-grey-30"
              >{{ post.date }}</span
              >
            </div>
          </div>
        </div>
        <div class="prose max-w-none pt-8">
          {{ post.content }}
        </div>

        <div class="mt-10 flex justify-between border-t border-lila py-12">
          <a href="/" class="flex items-center">
            <i class="bx bx-left-arrow-alt text-2xl text-primary"></i>
            <span
                class="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5"
            >Previous Post</span
            >
          </a>
          <div v-if="isAuthenticated">
            <router-link :to="{name: 'updatePost', params: {id: post._id }}"
                         class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
            >Edit Post
            </router-link>
            <button @click="deletePost()"
                    class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
            >Delete Post
            </button>
          </div>

          <a href="/" class="flex items-center">
        <span
            class="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5"
        >Next Post</span
        >
            <i class="bx bx-right-arrow-alt text-2xl text-primary"></i>
          </a>
        </div>
        <div
            class="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20"
        >
          <div class="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
            <h3 class="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
              Cynthia Chambless
            </h3>
            <p
                class="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9"
            >
              Cynthia Simpson Chambless is a professional horn player and highly
              sought after teacher in the Birmingham area. She plays on a Stephens
              Custom double horn, a Yamaha 667 double horn, and an Osmun Chicago 14
              cup with an L6 gold rim. You can hear her perform with the Tuscaloosa
              and Huntsville Symphony orchestras. Her repairman/horn guru is James
              Baker with Custom Brass.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import blogService from "../services/BlogService";
export default {
  data() {
    return {
      isAuthenticated: this.$store.getters.isAuthenticated,
      post: {
        title: "",
        description: "",
        date: "",
        content: ""
      }
    }
  },
  computed: {
    id(){
      return this.$route.params.id
    }
  },
  methods: {
    getPost(){
      blogService.get_blog(this.id)
          .then(response => {
            this.post = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    deletePost(){
      blogService.delete_blog(this.id)
          .then(() => {
            console.log("Blog deleted successfully");
            this.$router.push({name: "blog"});
          }).catch((err => {
        console.log(err)
      }))
    }
  },
  created() {
    this.getPost()
  }
}
</script>