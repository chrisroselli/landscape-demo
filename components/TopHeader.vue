<template>
  <div>
    <div id="header" class="w-full z-30 top-0 py-1 bg-white shadow-md">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <nav class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <NuxtLink class="text-gray-900 hover:text-primary active:text-primary font-bold transition-colors duration-500 ease-in-out uppercase inline-block no-underline py-2 px-4"
                  to="/about">About Me</NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-gray-900 hover:text-primary active:text-primary font-bold transition-colors duration-500 ease-in-out uppercase inline-block no-underline py-2 px-4"
                  to="/myservices">My Services</NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-gray-900 hover:text-primary active:text-primary font-bold transition-colors duration-500 ease-in-out uppercase inline-block no-underline py-2 px-4"
                  to="/mywork">My Work</NuxtLink>
              </li>
            </ul>
        </nav>

        <div class="lg:order-first">
          <NuxtLink class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            to="/">
            <Logo />
          </NuxtLink>
        </div>

        <div class="flex items-center" id="nav-content">
          <NuxtLink to="/hireme" class="inline-block text-md uppercase px-4 py-2 leading-none border border-primary hover:border-gray-900 rounded text-primary font-bold hover:text-gray-900 transition-colors duration-500 ease-in-out mt-4 lg:mt-0">Hire Me</NuxtLink>
        </div>
      </div>

      <!-- Mobile menu -->
      <nav class="md:hidden w-full" id="menu">
        <ul class="flex items-center justify-center text-base text-gray-700 pt-4">
          <li>
            <NuxtLink class="text-gray-900 hover:text-primary active:text-primary font-bold transition-colors duration-500 ease-in-out uppercase inline-block no-underline py-2 px-4"
              to="/about">About Me</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-gray-900 hover:text-primary active:text-primary font-bold transition-colors duration-500 ease-in-out uppercase inline-block no-underline py-2 px-4"
              to="/myservices">My Services</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-gray-900 hover:text-primary active:text-primary font-bold transition-colors duration-500 ease-in-out uppercase inline-block no-underline py-2 px-4"
              to="/mywork">My Work</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>
<style scoped>
</style>