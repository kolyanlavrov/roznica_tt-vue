<template>
    <div class="materials">
        <div class="container">
            <div class="materials__title title">{{Mat.MaterialsTitle}}</div>
            <div class="materials__body">
                <div class="materials__text text materials__item">
                    <p>
                        Москва находится в самой высокой группе риска по коронавирусу нового типа среди всех российских регионов, заявил мэр столицы Сергей Собянин.
                    </p>
                    <p>
                        Глава города объяснил свою оценку большим количеством людей, возвращающихся в Россию через Москву, и высоким числом зараженных. В сложившейся ситуации власти города принимают «максимально жесткие решения», чтобы не допустить распространения коронавируса.
                    </p>
                </div>
                <div class="materials__video materials__item">
                    <iframe width="502" height="315" src="https://www.youtube.com/embed/n1i91-h4AQY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="materials__text text materials__item min-w-768-block">
                    <p>
                        В Москве 30 марта власти ввели режим всеобщей самоизоляции. Выходить из дома можно для обращения за экстренной медицинской помощью, поездок на работу, похода в ближайший магазин и аптеку, выгула животных на расстоянии не больше 100 м от дома и выноса мусора. До 1 мая в городе также запрещено посещение парков и зон отдыха.
                    </p>
                </div>
            </div>
            <div class="materials__slider">
                <div class="swiper-container gallery-top materials__swiper">
                    <swiper class="swiper swiper-wrapper materials__wrapper" :options="swiperOptionTop" ref="swiperTop">
                        <swiper-slide class="swiper-slide materials__slide" v-for="(Images, index) in Mat.Images" :key="`${Images, id}-${index}`">
                            <img :src="Images.MaterialImage" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="swiper-button-next materials-button-next"></div>
                <div class="swiper-button-prev materials-button-prev"></div>
            </div>
            <div class="swiper-container gallery-thumbs">
                <swiper class="swiper swiper-wrapper" :options="swiperOptionThumbs" ref="swiperThumbs">
                    <swiper-slide class="swiper-slide materials__slide" v-for="(Images, index) in Mat.Images" :key="`${Images, id}-${index}`">
                        <img :src="Images.MaterialImage" alt="">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="materials__text text materials__item max-w-767-block">
                <p>
                    В Москве 30 марта власти ввели режим всеобщей самоизоляции. Выходить из дома можно для обращения за экстренной медицинской помощью, поездок на работу, похода в ближайший магазин и аптеку, выгула животных на расстоянии не больше 100 м от дома и выноса мусора. До 1 мая в городе также запрещено посещение парков и зон отдыха.
                </p>
            </div>
            <!-- <div class="materials__button button">
                <a href="#">Заказать</a>
            </div> -->
            <ButtonSimple/>
        </div>
    </div>
</template>

<script>
import data from '../mock/materials.json'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ButtonSimple from'../components/ButtonSimple.vue'

export default {
    name:"Materials",
    components: {
        Swiper,
        SwiperSlide,
        ButtonSimple
    },
    data() {
      return {
        Mat: data.Main,
        swiperOptionTop: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          navigation: {
            nextEl: '.materials-button-next',
            prevEl: '.materials-button-prev'
          },
          breakpoints: {
              768: {
                  slidesPerView: 5
              }
          }
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
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
button.button {
    margin-top: 36px;
}
.materials{
    background: #F2F2F2;
    padding: 40px 0px 72px 0px;
}
@media (min-width: 768px) and (max-width: 991px) {
    .materials{
        padding: 10px 0px 22px 0px;
    }
}
.materials__title{
    font-size: 36px;
    line-height: 53px;
    text-align: center;
}
.materials__body{
    padding: 26px 0px 33px 0px;
    margin: 0px -10px;
    display: flex;
}
.materials__item{
    padding: 0px 10px;
}
.materials__text{
    font-size: 15px;
    line-height: 18px;
    flex: 0 1 25%;
    color: #000000;
    text-align: left;
}
.materials__text p:first-child{
    margin-bottom: 20px;
}
@media (min-width: 768px){
    .min-w-768-block{
        display: block;
    }
    .max-w-767-block{
        display: none;
    }
}
@media (max-width: 768px){
    .min-w-768-block{
        display: none;
    }
    .max-w-767-block{
        display: block;
    }
}
.materials__video{
    flex: 0 1 50%
}

@media (max-width: 991px) {
    .materials__body{
        flex-direction: column;
        padding: 0px;
    }
    .materials__video{
        text-align: center;
    }
    .materials__text{
        order: 1;
    }
}
.materials__slider{
    position: relative;
    padding: 0px 75px;
}
@media (max-width: 991px){
    .materials__slider{
        padding: 15px 75px;
    }
}
.materials-button-next, .materials-button-prev{
    width: 43px;
    height: 43px;
}
.materials-button-next::after{
    content: "";
    width: 43px;
    height: 43px;
    background: url(/images/materials/arrow-next.svg) no-repeat;
}
.materials-button-prev::after{
    content: "";
    width: 43px;
    height: 43px;
    background: url(/images/materials/arrow-prev.svg) no-repeat;
}
.materials__button{
    text-align: center;
    margin-top: 36px;
}
.gallery-thumbs{
    display: none;
}
@media(max-width:480px){
    .materials{
        padding: 20px 0px 40px;
    }
    .materials__video.materials__item iframe{
        width: 334px; 
        height:210px;
    }
    .materials__item{
        padding: 0px;
    }
    .materials__body{
        margin: 0px;
    }
    .materials__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 13px;
    }
    .materials__text {
        margin: 21px 0px;
    }
    .materials-button-next, .materials-button-prev{
        display: none;
    }
    .materials__slider{
        padding: 0px;
    }
    .gallery-top .materials__slide{
        height: 210px;
        margin-right: 0px;
    }
    .gallery-top .materials__slide img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
    .gallery-thumbs{
        display: block;
        margin: 10px -26px 0px;
    }
    .gallery-thumbs .materials__slide{
        height: 102px;
        width: 102px;
    }
    .gallery-thumbs .materials__slide img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
}
</style>