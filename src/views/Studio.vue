<template>
  <div class="bg-grey-50" id="about">
    <div
        class="container flex flex-col items-center py-16 md:py-20 lg:flex-row"
    >
      <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">

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

      </div>
    </div>
  </div>
  <Statistics/>
  <Clients/>
</template>

<script>
import Statistics from "../components/Statistics.vue";
import Clients from "../components/Clients.vue";
export default {
  components: {
    Statistics,
    Clients
  }
}
</script>