<template>
    <div class="mask-card">
        <div class="container">
            <div class="mask-card__body d-flex">
                <div class="mask-card__slider col-6">
                    <swiper class="swiper gallery-top" 
					v-for="(swiper, index) in card.cards" :key="`${swiper.id}-${index}`"
					:options="swiperOptionTop" ref="swiperTop">
                        <swiper-slide class="mask-card__slide">
                            <img :src="swiper.CatalogImage" alt="">
                        </swiper-slide>
                    </swiper>
                    <swiper class="swiper gallery-thumbs" 
					v-for="(swiper, index) in card.cards" :key="`${swiper.id}-${index}`"
					:options="swiperOptionThumbs" ref="swiperThumbs">
                        <swiper-slide class="mask-card__slide"  >
                            <img :src="swiper.CatalogImage" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="mask-card__about col-6">
					<div class="mask-card__info"
					v-for="(info, index) in card.cards" :key="`${info.id}-${index}`"
					>
						<div class="mask-card__title">
							{{info.Title}}
						</div>
						<div class="mask-card__article">
							{{info.Article}}
						</div>
						<div class="mask-card__size">
							{{info.Size}}
						</div>
						<div class="mask-card__price">
							{{info.Price}}
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import data from '../mock/cards'
export default {
    name: 'Card',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        card: data.products,
		
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
.mask-card__slider{
	height: 480px;
}
.gallery-top {
	height: 80%;
	width: 100%;
}
.gallery-thumbs {
	height: 20%;
	box-sizing: border-box;
}
.gallery-thumbs .swiper-slide {
	width: 25%;
	height: 100%;
	opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
	opacity: 1;
}
</style>