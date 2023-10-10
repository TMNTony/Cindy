<template>
  <div class="bg-grey-50" id="clients">
    <div class="container py-16 md:py-20">
      <div class="mx-auto w-full sm:w-3/4 lg:w-full">
        <h2
            class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
        >
          My Schools
        </h2>
        <div
            class="flex flex-wrap items-center justify-center pt-4 sm:pt-4"
        >
          <div v-for="school in schools" :key="school.name">
            <span class="m-8 block font-semibold">
                    <img
                        :src="imageUrl(school.pictureURL)"
                        alt="client logo"
                        class="mx-auto block h-20 w-auto"
                    />
                    <p>{{ school.name }}</p>
                  </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schools: [],
    }
  },
  methods: {
    getSchools() {
      this.schools = this.$store.getters.getSchools;
    },
    imageUrl(imagePath) {
      return new URL(`/src/assets/img/${imagePath}`, import.meta.url)
    },
  },
  created() {
    this.getSchools();
  },
}
</script>

<style>

</style>