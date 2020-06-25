<template>
  <div class="dark">
    <TopHeader />
    <Slider />
      <nuxt />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "~/components/TopHeader.vue";
import Slider from "~/components/Slider.vue";
import Footer from "~/components/Footer.vue";

  export default {
    transition: 'layout',
    components: {
      TopHeader,
      Slider,
      Footer
    },
  }
</script>

<style scoped>

</style>