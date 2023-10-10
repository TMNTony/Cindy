<template>
  <div class="container py-16 md:py-20" id="contact">
    <h2
        class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      Contact Me!
    </h2>
    <h4
        class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
    >
      Have Any Questions?
    </h4>
    <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
      <p class="font-body text-grey-10">
        If you have any questions or would like to set up private lessons, shoot me a message!
      </p>
    </div>
    <form ref="form" @submit.prevent="sendEmail" class="mx-auto w-full pt-10 sm:w-3/4">
      <div class="flex flex-col md:flex-row">
        <input
            class="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            type="text"
            name="from_name"
        />
        <input
            class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:ml-3 md:mt-0 md:w-1/2 lg:ml-5"
            placeholder="Email"
            type="text"
            name="reply_to"
        />
      </div>
      <textarea
          class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
         name="message"
          cols="30"
          rows="10"
      ></textarea>
      <button

          class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
      >
        Send
        <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
      </button>
    </form>
    <div class="flex flex-col pt-16 lg:flex-row">
      <div
          class="w-full border-b-2 border-l-2 border-r-2 border-t-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
      >
        <div class="flex items-center">
          <i class="bx bx-phone text-2xl text-grey-40"></i>
          <p
              class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg"
          >
            My Phone
          </p>
        </div>
        <p
            class="pt-2 text-left font-body font-bold text-primary lg:text-lg"
        >
          (334) 224-2039
        </p>
      </div>
      <div
          class="w-full border-b-2 border-l-2 border-r-2 border-t-0 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
      >
        <div class="flex items-center">
          <i class="bx bx-envelope text-2xl text-grey-40"></i>
          <p
              class="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg"
          >
            My Email
          </p>
        </div>
        <p
            class="pt-2 text-left font-body font-bold text-primary lg:text-lg"
        >
          cynthia.ellen.simpson@gmail.com
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_cznazzg', 'template_76sirf7', this.$refs.form, 'u3oGwDX4m4dBODVe3')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>