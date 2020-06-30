<template>
  <div>
<div class="flex min-h-screen flex-wrap m-10">
  <div class="flex-auto lg:flex-initial m-auto w-1/2">
  <p class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">Hire Me</p>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name">
      </div>
      <div class="mb-6">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Businesses Name">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </div>
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