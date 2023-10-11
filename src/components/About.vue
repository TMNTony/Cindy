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
        <p class="pt-6 font-body leading-relaxed text-grey-20">
          Cynthia Simpson Chambless is a professional horn player and highly
          sought after teacher in the Birmingham area. She plays on a Stephens
          Custom double horn, a Yamaha 667 double horn, and an Osmun Chicago 14
          cup with an L6 gold rim. You can hear her perform with the Tuscaloosa
          and Huntsville Symphony orchestras. Her repairman/horn guru is James
          Baker with Custom Brass.
          <router-link :to="{name: 'bio'}" class="pt-6 text-primary">Full Bio</router-link>
        </p>
        <h4
            class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          My Mission Statement
        </h4>
        <p class="pt-6 font-body leading-relaxed text-grey-20">
          Cynthia believes that all lessons learned in music can be applied to a student’s future life and career.
          Setting goals, attention to detail, and confidence will benefit all paths in adulthood. Students receive a
          hand tailored practice plan each lesson to help them achieve success at an individual level and represent
          their school proudly at honor bands, solo festivals, and summer camps. Chambless also works with horn sections
          on team work, group listening, and uplifting others. Students in the Chambless horn studio are often in her
          program for many years and build a sense of trust in the process. All students can benefit from a hybrid
          approach of private and group instruction that will teach them lifelong lessons.
        </p>

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
export default {
  components: {
    Bio,
  }
};
</script>

<style></style>
