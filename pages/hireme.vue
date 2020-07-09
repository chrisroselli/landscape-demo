<template>
  <div>
    <div class="flex justify-center pb-2 text-2xl m-10 font-bold uppercase">
      <div class="w-64 py-4 mx-5"><hr class="h-line text-black bg-black" /></div>
      <div class="w-auto text-center"><p>Hire Me</p></div>
      <div class="w-64 py-4 mx-5"><hr class="h-line text-black bg-black" /></div>
    </div>
    <div class="flex min-h-screen flex-wrap m-10">
      <div class="flex-auto lg:flex-initial mx-auto">
      <form name="contact-form" class="w-full max-w-lg" netlify>
        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-footergray text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input class="appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="company">
              Company Name
            </label>
            <input class="appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company" type="text">
          </div>
        </div>
        <div class="flex flex-wrap mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Which services are you interested in?</label>
          <div class="w-full">
              <label class="inline-flex items-center">
                <input type="checkbox" class="ml-4">
                <span class="ml-2 text-sm">Web Design</span>
              </label>

              <label class="inline-flex items-center">
                <input type="checkbox" class="ml-4">
                <span class="ml-2 text-sm">Web Development</span>
              </label>

              <label class="inline-flex items-center">
                <input type="checkbox" class="ml-4">
                <span class="ml-2 text-sm">Web Hosting</span>
              </label>
          </div>
        </div>
        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
          <span class="text-gray-700">Please provide a description of your project:</span>
          <textarea class="form-textarea mt-1 appearance-none block w-full bg-footergray text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="10"></textarea>
        </label>
        <button class="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
      </form>
      </div>
    </div> 
    <Footer />
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>