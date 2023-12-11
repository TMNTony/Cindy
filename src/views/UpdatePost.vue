<template>
  <div class="bg-grey-50" id="blog">
    <div class="container py-16 md:py-20">
      <h2
          class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >UPDATE POST
      </h2>
      <div
          class="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
      >
        <form @submit.prevent="updatePost()">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-600">Title:</label>
            <input type="text" id="title" v-model="post.title" class="mt-1 p-2 border rounded-md w-full"/>
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-600">Description:</label>
            <input type="text" id="title" v-model="post.description" class="mt-1 p-2 border rounded-md w-full"/>
          </div>
          <div class="mb-4">
            <label for="content" class="block text-sm font-medium text-gray-600">Content:</label>
            <textarea id="content" v-model="post.content" class="mt-1 p-2 border rounded-md w-full" rows="4"></textarea>
          </div>
          <button
              class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          >Submit Post
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import BlogService from "../services/BlogService";
import {DateTime} from "luxon"
import blogService from "../services/BlogService";

export default {
  name: "addPost",
  data() {
    return {

      post: {
        title: "",
        description: "",
        content: "",
      },
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    getPost() {
      blogService.get_blog(this.id)
          .then(response => {
            this.post = response.data
            console.log(this.post)
          })
          .catch(err => {
            console.log(err)
          })
    },
    updatePost() {
      BlogService.update_blog(this.id, this.post)
          .then(() => {
            console.log("Blog post updated successfully");
            this.$router.push({name: "blog"});
          })
          .catch(err => {
            console.error("Error updating blog post:", err);
          });
    },
  },
  created() {
    this.getPost()
  }
}
</script>
<style></style>