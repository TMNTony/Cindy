<template>
  <div
            class="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
            :style="{ backgroundImage: 'url(' + imageUrl('experience-figure.png') + ')' }"
            id="statistics"
          >
            <div class="container">
              <div
                class="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full"
              >
                <div
                  class="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5"
                >
                  <div
                      class="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                  >
                    <div>
                      <img
                          src="/src/assets/img/dollars.png"
                          class="mx-auto h-12 w-auto md:h-20"
                          alt="icon project"
                      />
                    </div>
                    <div class="pt-5 md:pl-5 md:pt-0">
                      <h1
                          class="font-body text-2xl font-bold text-primary md:text-4xl"
                      >
                        $60,000+
                      </h1>
                      <h4
                          class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        Total Scholarship Dollars Awarded
                      </h4>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                  >
                    <div>
                      <img
                        src="/src/assets/img/icon-award.svg"
                        class="mx-auto h-12 w-auto md:h-20"
                        alt="icon project"
                      />
                    </div>
                    <div class="pt-5 md:pl-5 md:pt-0">
                      <h1
                        class="font-body text-2xl font-bold text-primary md:text-4xl"
                      >
                        13
                      </h1>
                      <h4
                        class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        High School All-State Musicians
                      </h4>
                    </div>
                  </div>

                  <div
                    class="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                  >
                    <div>
                      <img
                        src="/src/assets/img/icon-award.svg"
                        class="mx-auto h-12 w-auto md:h-20"
                        alt="icon award"
                      />
                    </div>
                    <div class="pt-5 md:pl-5 md:pt-0">
                      <h1
                        class="font-body text-2xl font-bold text-primary md:text-4xl"
                      >
                        8
                      </h1>
                      <h4
                        class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        Middle School All-State Musicians
                      </h4>
                    </div>
                  </div>

                  <div
                    class="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                  >
                    <div>
                      <img
                        src="/src/assets/img/ribbon.png"
                        class="mx-auto h-12 w-auto md:h-20"
                        alt="icon happy clients"
                      />
                    </div>
                    <div class="pt-5 md:pl-5 md:pt-0">
                      <h1
                        class="font-body text-2xl font-bold text-primary md:text-4xl"
                      >
                        32
                      </h1>
                      <h4
                        class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        District Honor Band Musicians
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  methods: {
    imageUrl(imagePath) {
      return new URL(`/src/assets/img/${imagePath}`, import.meta.url)
    },
  }
}
</script>

<style>

</style>