<template>
  <div>
<vueper-slides :touchable="false">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content" />
</vueper-slides>
    <div class="flex flex-wrap m-10">
        <p class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">Welcome</p>
        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur
          <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae congue eu consequat ac.
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
        // You can also provide a URL for the image.
        image: require('@/assets/img/profile-pic.jpg')
      },
      {
        title: 'Slide 2',
        content: 'Photo by Max Rive',
        // You can also provide a URL for the image.
        image: require('@/assets/img/profile-pic.jpg')
      },
    ]
  })
};
</script>

<style>
.vueperslide__title {
  font-size: 4rem;
  text-transform: uppercase;
  color: #c53030;
  font-weight: 700;
  
}
.vueperslide__content {
  font-size: 2rem;
}
</style>
