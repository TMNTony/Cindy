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
            <p class="pt-6 font-body leading-relaxed text-grey-20">
              Alabama native, Cynthia Simpson Chambless, is a highly sought-after horn teacher and performer. She is
              currently holding positions as 4th horn of the Huntsville (AL) Symphony Orchestra and 3rd horn of the
              Tuscaloosa (AL) Symphony Orchestra. In addition to being a freelance performer across the southeast, she
              has performed as 2nd horn of the Starkville (MS) Symphony Orchestra, and as a substitute musician with the
              Alabama Symphony Orchestra, the Kansas City Symphony, the South Dakota Symphony, and Chamber Music
              Amarillo (TX).</p>

            <p class="pt-6 font-body leading-relaxed text-grey-20">Her honors include second prize at the 2015
              International Horn Competition of America Collegiate
              Division,
              2015-2016 semi-finalist for the New World Symphony, and 2010/2011 participant at the Round Top Festival
              Institute. She has also won numerous awards at International Horn Society regional competitions in the
              southeast and Midwest.</p>

            <p class="pt-6 font-body leading-relaxed text-grey-20"> Cynthia maintains a full studio of private lesson
              students across the Birmingham metro area. Her students
              consistently rank in Alabama All State band, Alabama All-State Orchestra, Alabama All-State Solo Festival,
              and All-District bands. She teaches private lessons and sectionals for 10 schools and sees over 100 horn
              students each month.</p>

            <p class="pt-6 font-body leading-relaxed text-grey-20">Chambless received a B.M. and M.M. from the
              University of Alabama under the tutelage of Charles “Skip”
              Snead. While at UA, she taught lessons to undergraduate horn students and was a graduate teaching
              assistant in the music theory department. She also received a Performer’s Certificate from the University
              of Missouri-Kansas City, studying with Martin Hackleman.</p>

            <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Student Achievements
            </h4>
            <p class="pt-6 font-body leading-relaxed text-grey-20">
              Students under Cynthia’s mentorship have accomplished a number of impressive musical feats. Students
              attend a number of university hosted honor bands throughout Alabama, score superior ratings at Solo and
              Ensemble, and attend university hosted summer camps. Listed below are the highest honors received at the
              state and national level: </p>
            <ul class="pt-6 font-body leading-relaxed text-grey-20">
              <li>Alabama All-State Solo Festival Top 10 Finalist 2023</li>
              <li>1st Chair Alabama All-State Red Band 2016, 2022, 2023</li>
              <li>1st Chair Alabama All-State Festival Orchestra 2022, 2023</li>
              <li>District V Red Band 2016, 2018, 2019, 2022, 2023</li>
              <li>District IV Red Band 2022, 2023</li>
              <li>District IV MS All-State Band 2018, 2021, 2022, 2023</li>
              <li>District IV MS Honor Band 2018, 2019, 2020, 2021, 2022, 2023</li>
            </ul>
            <p class="pt-6 font-body leading-relaxed text-grey-20">
              Students from the Chambless horn studio have received music scholarships at a number of Universities.
              These scholarships are awarded to students ranging from Music Majors to Music Minors to participants in
              marching/concert ensembles majoring in another field. Their music scholarships allow them to pursue their
              dreams, get paid to do something they love, and make new friends. </p>
            <ul class="pt-6 font-body leading-relaxed text-grey-20">
              <li>University of Alabama</li>
              <li>Auburn University</li>
              <li>University of Alabama at Birmingham</li>
              <li>Jacksonville State University</li>
              <li>Samford University</li>
              <li>University of Montevallo</li>
              <li>Oglethorpe University</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'bio',
  data() {
  },
  components: {},
}
</script>