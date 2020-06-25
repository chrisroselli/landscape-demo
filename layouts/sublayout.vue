<template>
  <div>
    <TopHeader />
      <nuxt />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "~/components/TopHeader.vue";
import Footer from "~/components/Footer.vue";

  export default {
    transition: 'page',
    components: {
      TopHeader,
      Footer
    },
  }
</script>

<style scoped>

</style>