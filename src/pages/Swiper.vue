<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><img src="../images/advantages/image1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../images/advantages/image2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../images/advantages/image3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../images/advantages/image4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../images/advantages/image5.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css'

    export default {
        name:'Carousell',
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        data() {
            return {
                swiperOptions: {
                    pagination: {
                    el: '.swiper-pagination',
                    clickable:'true'
                    },
                }
            }
        },
    }
</script>