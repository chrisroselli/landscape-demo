<template>
  <div>
<vueper-slides autoplay :bullets="false">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content"
    :duration="3000" />
</vueper-slides>
    <div class="mx-40 my-10 text-center">
        <p class="uppercase font-bold text-black text-xl mb-2">Specializing in web design and development for small businesses</p>
        <p class="mb-8">
          My passion is to create new online experiences for small businesses. Wether we're starting from scratch or reimagining your existing website, together we will conceptualize what your ideal web presence should look and function like.
        </p>
    </div>       
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: { VueperSlides, VueperSlide },
    data: () => ({
    slides: [
      {
        title: 'Web Design & Development',
        content: 'Let\'s build a website that elevates your business',
        image: require('@/assets/img/slide1.jpg')
      },
      {
        title: 'Blazing Fast CDN Web Hosting',
        content: 'Leveraging the power and speed of content delivery networks',
        image: require('@/assets/img/slide2.jpg')
      },
    ]
  })
};
</script>

<style>
.vueperslide__title {
  font-size: 3.5rem;
  text-transform: uppercase;
  color: #c53030;
  font-weight: 700;  
  background-color: rgba(255, 255, 255, 0.85);
  padding: .75rem 1rem;
}
.vueperslide__content {
  font-size: 1.75rem;
  background-color: rgba(218, 51, 51, 0.85);
  padding: .75rem 1rem;
  font-weight: bold;
  bottom:.75rem;
  position: relative;
}
.vueperslides__arrow {color: #c53030}
</style>
