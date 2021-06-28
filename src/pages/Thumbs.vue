<template>
    <div class="thumb-video">
        <!-- swiper1 -->
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            <swiper-slide class="slide-1 thumb-video__main">
                <iframe height="315" src="https://www.youtube.com/embed/n1i91-h4AQY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </swiper-slide>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <swiper-slide class="slide-1">
                <iframe width="154" height="97" src="https://www.youtube.com/embed/n1i91-h4AQY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </swiper-slide>
            <swiper-slide class="slide-2">
                <iframe width="154" height="97" src="https://www.youtube.com/embed/LVohked8wkU?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    
    export default {
        name: 'ThumbVideo',
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        data() {
            return {
                swiperOptionTop: {
                
                },
                swiperOptionThumbs: {
                    breakpoints: {
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        420: {
                            slidesPerView: 2,
                            // spaceBetween: 15,
                        },
                        992: {
                            slidesPerView: 3,
                        }
                    }
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
.gallery-thumbs{
    padding-top: 12px;
}
.thumb-video__main iframe {
    width: 100%;
    /* height: 100%; */
}
@media (max-width:767px) {
    .thumb-video__main iframe {
        height: 209px;
    }
}
@media (max-width:480px) {
    .swiper.gallery-thumbs {
        bottom: -410px;
    }
}
@media (max-width:375px) {
    .swiper.gallery-thumbs {
        position: absolute;
        bottom: -430px;
        left: 0px;
    }
}
</style>