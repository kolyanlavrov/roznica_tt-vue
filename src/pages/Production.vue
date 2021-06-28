<template>
    <div class="production">
        <div class="container">
            <div class="production__body">
                <h3 class="production__title title">{{Production.ProductionTitle}}</h3>
                <p class="production__text text">{{Production.ProductionSubtitle}}</p>
            </div>
        </div>
        <div class="production__slider">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="production__slide" v-for="(images, index) in Production.images" :key="`${images.id}-${index}`">
                    <img :src="images.ProductImage" alt="">
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev production-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next production-button-next" slot="button-next"></div>
        </div>
        <!-- <img src="../assets/images/advantages/image1.jpg" alt=""> -->
    </div>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'
    import data from '../mock/production.json'
    export default {
    name: 'Production',
    title: 'Navigation',
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
            swiper: directive
        },
    data() {
        return {
            Production: data.products,
            swiperOption: {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 20,
                breakpoints: {
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 9,
                        centeredSlides: true,
                        loop: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        // centeredSlides: true,
                    }
                },
                navigation: {
                    nextEl: '.production-button-next',
                    prevEl: '.production-button-prev'
                    },
                }
            }
        }
    }
</script>
<style scoped>
.production{
    background: #F2F2F2;
    padding: 40px 0px 72px 0px;
}
.production__slider{
    max-width: 1054px;
    padding: 0px 15px;
    margin: 0px auto;
}
@media (min-width: 768px) and (max-width: 991px) {
    .production {
        padding: 10px 0px 16px 0px;
    }
}
.production__body{
    padding-bottom: 20px;
}
.production__title{
    font-weight: 600;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    margin-bottom: 20px;
}
.production__text{
    font-size: 15px;
    line-height: 18px;
    color: #000000;
}
.production__slider{
    position: relative;
    max-width: 1024px;
    padding: 0 87px;
}
.production__slide img{
    max-width: 100%;
}
.production-button-next, .production-button-prev{
    width: 43px;
    height: 43px;
}
.production-button-next::after{
    content: "";
    width: 43px;
    height: 43px;
    background: url(../assets/images/icon-svg/slick-next.svg) no-repeat;
}
.production-button-prev::after{
    content: "";
    width: 43px;
    height: 43px;
    background: url(../assets/images/icon-svg/slick-prev.svg) no-repeat;
}

@media (max-width: 480px) {
    .production__slider{
        max-width: none;
        padding: 0px;
    }
    .production__title{
        font-size: 24px;
        line-height: 36px;  
    }
    .production{
        padding: 20px 0px 40px;
    }
    .production__slide img{
        max-width: 241px;
    }
    .production__text{
        line-height: 21px;
        text-align: left;
    }
    .production-button-next, .production-button-prev{
        display: none;
    }
    .swiper-container-wrapper{
        padding: 0px;
    }
    .production__slide{
        flex: 0 1 241px;
    }
}
</style>