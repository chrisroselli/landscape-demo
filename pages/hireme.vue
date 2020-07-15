<template>
  <div>
    <div class="flex justify-center pb-2 text-2xl m-10 font-bold uppercase">
      <div class="w-64 py-4 mx-5"><hr class="h-line text-black bg-black" /></div>
      <div class="w-auto text-center"><p>Hire Me</p></div>
      <div class="w-64 py-4 mx-5"><hr class="h-line text-black bg-black" /></div>
    </div>
    <div class="flex min-h-screen flex-wrap m-10">
      <div class="flex-auto lg:flex-initial mx-auto">
         <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" name="contact-form" action="/confirmation" method="post" class="w-full max-w-lg" netlify netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact-form" />
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="first-name">
                  First Name
                </label>
                <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
                <input v-model="firstName" name="first-name" class="appearance-none block w-full bg-footergray text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text">
                <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="last-name">
                  Last Name
                </label>
                <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ errors }">
                <input v-model="lastName" name="last-name" class="appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text">
                <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                <input v-model="email" name="email" class="appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
                <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="company">
                  Company Name
                </label>
                 <ValidationProvider name="Company Name" rules="required|alpha" v-slot="{ errors }">
                <input v-model="companyName" name="company" class="appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company" type="text">
                <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="flex flex-wrap mb-6">
              <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="services">Which services are you interested in?</label>
              <div class="w-full">
                  <label class="inline-flex items-center" for="web-design">
                    <input name="web-design" type="checkbox" class="ml-4">
                    <span class="ml-2 text-sm">Web Design</span>
                  </label>

                  <label class="inline-flex items-center" for="web-dev">
                    <input name="web-dev" type="checkbox" class="ml-4">
                    <span class="ml-2 text-sm">Web Development</span>
                  </label>

                  <label class="inline-flex items-center" for="web-hosting">
                    <input name="web-hosting" type="checkbox" class="ml-4">
                    <span class="ml-2 text-sm">Web Hosting</span>
                  </label>
              </div>
            </div>
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="message">
              <span class="text-gray-700">Please provide a description of your project:</span>
              <ValidationProvider name="Message" rules="required" v-slot="{ errors }">
              <textarea v-model="message" name="message" class="form-textarea mt-1 appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="10"></textarea>
              <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </label>
            <div class="flex justify-center">
              <button class="text-center bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
            </div> 
          </form>
        </ValidationObserver>
      </div>
    </div> 
    <Footer />
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
  export default {
    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      message: ''
    }),
    methods: {
      onSubmit () {
        alert('Form has been submitted!');
      }
    },
    components: {
      ValidationObserver,
      ValidationProvider
    },
  }
</script>

<style scoped>

</style>