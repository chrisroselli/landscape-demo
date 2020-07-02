<template>
  <div>
  <footer>
        <div class="flex justify-center h-full bg-footergray" id="menu">
          <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">             
              <li>
                <NuxtLink class="text-gray-900 hover:text-primary active:text-primary transition-colors duration-500 ease-in-out inline-block no-underline py-2 px-4"
                  to="/about">About Me</NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-gray-900 hover:text-primary active:text-primary transition-colors duration-500 ease-in-out inline-block no-underline py-2 px-4"
                  to="/myservices">My Services</NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-gray-900 hover:text-primary active:text-primary transition-colors duration-500 ease-in-out inline-block no-underline py-2 px-4"
                  to="/mywork">My Work</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
    <div class="flex justify-center bg-footergray pb-2 text-xs">
      <p>&copy; 2020 Chris Roselli</p>
    </div>
  </footer>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>