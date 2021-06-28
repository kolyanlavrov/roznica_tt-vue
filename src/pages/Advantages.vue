<template>
    <div class="advantages">
        <div class="container">
            <div class="advantages__container">
                <h3 class="advantages__title title">{{Adv.AdvantageTitle}}</h3>
                <div class="advantages__icon row">
                    <div class="advantages__item" v-for="(images, index) in Adv.images" :key="`${images.id}-${index}`">
                        <div class="advantages__img">
                            <img :src="images.AdvantageImage" alt="">
                        </div>
                        <div class="advantages__subtitle">
                            <p>{{images.AdvantageSubtitle}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="advantages__galery galery">
            <div class="container">
                <h3 class="galery__title title">{{AdvGalery.GaleryTitle}}</h3>
            </div>
            <div class="galery__slider">
                <div class="galery__swiper">
                    <swiper class="swiper galery__wrapper" :options="swiperOption">
                        <swiper-slide class="galery__slide" v-for="(images, index) in AdvGalery.images" :key="`${images,id}-${index}`">
                            <img :src="images.GaleryImage" alt="">
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-button-prev galery-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next galery-button-next" slot="button-next"></div>
                </div>
            </div>
            <div class="container">
                <div class="galery__text">
                    <p>Мы готовы дополнить каждое изделие брендом вашей компании. Таким образом, она станет современной частью вашего фирменного стиля.</p>
                </div>
                <div class="galery__button button">
                    <a href="#">Заказать</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import data from '../mock/advantages.json'
export default {
    name: "Advantages",
    title: 'Navigation',
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data () {
        return{
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 20,
                slidesPerGroup: 3,
                speed: 2000,
                navigation: {
                    nextEl: '.galery-button-next',
                    prevEl: '.galery-button-prev'
                },
                breakpoints: {
                    320: {
                        slidesPerView: '3.4',
                        spaceBetween: 9,
                        centeredSlides: true,
                        loop: true,
                        slidesPerGroup: 1,
                        speed: 500,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                        // centeredSlides: true,
                    }
                }
            },
            Adv: data.advantages,
            AdvGalery: data.galery,
        }
    }
}
</script>
<style scoped>
.advantages{
    padding: 30px 0px 30px;
}
.advantages__container{
    padding-bottom: 65px;
}
@media (min-width: 768px) and (max-width: 991px) {
    .advantages__contaier{
        padding-bottom: 25px;
    }
}
.advantages__title{
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    margin-bottom: 20px;
}
.advantages__icons{
    margin: 0px -10px;
}
.advantages__item{
    display: flex;
    flex-direction: column;
    flex: 0 1 16.6666%;
    text-align: center;
    padding: 0px 10px;
}
.advantages__img{
    align-self: center;
    display: flex;
    height: 45px;
}
.advantages__img img{
    align-self: flex-end;
}
.advantages__subtitle{
    margin-top: 14px;
    font-size: 15px;
    line-height: 18px;
}
.advantages__galery{
    padding: 30px 0px 72px 0px;
    background-color: #191919;
}
@media (min-width: 768px) and (max-width: 991px) {
    .advantages__galery{
        padding: 10px 0px 22px 0px;
    }
}
@media (max-width: 767px) {
    .advantages__title{
        font-size: 24px;
        line-height: 36px;
    }
}
@media (max-width: 480px) {
    .advantages__galery{
        padding: 10px 0px 30px 0px;
    }
    .advantages__icons{
        flex-wrap: wrap;
    }
    .advantages__item{
        flex: 0 1 50%;
        margin-bottom: 15px;
    }
    .advantages__contaier{
        padding-bottom: 25px;
    }
}
.galery__title{
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 26px;
}
.galery__slider{
    position: relative;
    max-width: 1024px;
    padding: 0 87px;
    margin: 0px auto;
}
.galery__slide img{
    max-width: 100%;
}
.galery-button-next, .galery-button-prev{
    width: 43px;
    height: 43px;
}
.galery-button-next::after{
    content: "";
    width: 43px;
    height: 43px;
    background: url(../assets/images/advantages/svg/arrow_next.svg) no-repeat;
}
.galery-button-prev::after{
    content: "";
    width: 43px;
    height: 43px;
    background: url(../assets/images/advantages/svg/arrow_prev.svg) no-repeat;
}
.galery__text{
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    max-width: 744px;
    margin: 30px auto;
}
.galery__button{
    text-align: center;
}
@media (max-width: 480px) {
    .galery__title{
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 13px;
    }
    .galery__text{
        font-size: 15px;
        line-height: 21px;
        margin: 15px auto;
        text-align: left;
    }
    .galery__slider{
        max-width: none;
        padding: 0px;
    }
    .galery-button-next, .galery-button-prev{
        display: none;
    }
    .galery__button a{
        padding: 14px 64.5px;
    }
}
</style>