<template>
  <div class="bg-grey-50" id="blog">
    <div class="container py-16 md:py-20">
      <h2
          class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        My Blog!
      </h2>
      <h4
          class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        Check out my latest posts!
      </h4>
      <div
          class="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
      >
        <div v-if="posts.length === 0">
          <div class="shadow">
            <div class="relative">
            <span
                class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
            ></span>
            </div>
            <div class="bg-white px-5 py-6 xl:py-8">
            <span class="block font-body text-lg font-semibold text-black"
            >No Posts Yet</span
            >
              <span class="block pt-2 font-body text-grey-20"
              >Check back later for updates!</span
              >
            </div>
          </div>
        </div>
        <div v-for="post in posts" :key="post.title">
          <router-link :to="{name: 'blogPost', params: {id: post._id }}" class="shadow">
            <div class="relative">
            <span
                class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
            ></span>


            </div>
            <div class="bg-white px-5 py-6 xl:py-8">
            <span class="block font-body text-lg font-semibold text-black"
            >{{ post.title }}</span
            >
              <span class="block pt-2 font-body text-grey-20"
              >{{ post.description }}</span
              >
            </div>
          </router-link>
        </div>
        <router-link v-if="isAuthenticated" :to="{name: 'addPost'}"
                     class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
        >Add Post
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";


export default {
  data() {
    return {
      isAuthenticated: this.$store.getters.isAuthenticated,
      posts: [],
    }
  },
  methods: {
    getPosts() {
      BlogService.get_blogs()
          .then(response => {
            this.posts = response.data
          })
          .catch(err => {
            console.log(err)
          })
    },
    imageUrl(imagePath) {
      return new URL(`/src/assets/img/${imagePath}`, import.meta.url)
    },
  },
  created() {
    this.getPosts();

  },
};
</script>

<style></style>
