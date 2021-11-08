<template>
    <div class="mask-card">
        <div class="container">
            <div class="mask-card__body">
                <div class="mask-card__slider">
                    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                        <swiper-slide class="mask-card__slide" v-for="(images, index) in galery.images" :key="`${images,id}-${index}`">
                            <img :src="images.GaleryImage" alt="">
                        </swiper-slide>
                    </swiper>
                    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                        <swiper-slide class="mask-card__slide" v-for="(images, index) in galery.images" :key="`${images,id}-${index}`">
                            <img :src="images.GaleryImage" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="mask-card__about">

                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import data from '../mock/advantages'
export default {
    name: 'Card',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        galery: data.galery,
        swiperOptionTop: {
          loop: true,
          loopedSlides: 5,
          spaceBetween: 10,
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 5, 
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>
<style scoped>

</style>