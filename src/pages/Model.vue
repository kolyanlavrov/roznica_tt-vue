<template>
    <div class="model">
        <div class="model__container">
            <div class="model__title title">{{model.ModelTitle}}</div>
            <div class="slider__container ">
                <swiper class="swiper model__items" :options="swiperOption">
                    <swiper-slide class="swiper-slide model__card" v-for="(models, index) in model.models" :key="`${models.id}-${index}`">
                        <img :src="models.ModelImage" alt="" class="model__image">
                        <router-link to="#" class="model__link">{{models.title}}</router-link>
                        <p class="text">{{models.subtitle}}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="model__about">
            <div class="model__text text">
                <p>Мы предлагаем купить маску индивидуальной защиты двухслойного типа. Как правило, этого уже достаточно для защиты органов дыхания. Однако если у клиента имеется свой взгляд на уровень безопасности, мы готовы создать трехслойные изделия.</p>
            </div>
            <!-- <button type="button" class="model__button button">
                <a href="#">Заказать</a>
            </button> -->
            <ButtonSimpleWhite/>
        </div>
    </div>
</template>

<script> 
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import data from '../mock/model.json'
import ButtonSimpleWhite from '../components/ButtonSimpleWhite.vue'
export default {
    name: "Model",
    components: {
        Swiper,
        SwiperSlide,
        ButtonSimpleWhite
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            model: data.products,
            swiperOption: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 9,
                loop: 'true',
                breakpoints: {
                    992: {
                        
                    }
                }
            }
        }
    },
    mounted () {
        console.log(this.cards);
    }
}
</script>

<style scoped>

.model{
    padding-top: 30px;
    overflow-x: hidden;
}
.model__container{
    max-width: 851px;
    margin: 0px auto;
}
.model__title{
    text-align: center;
    margin-bottom: 26px;
}
.model__card{
    /* padding: 0px 32px; */
    display: flex;
    flex-direction: column;
    flex: 0 1 241px;
    position: relative;
    height: auto;
}
.model__item{
    display: flex;
    flex-direction: column;
}
.model__link{
    background-color: #EC5827;
    width: 175px;
    height: 43px;
    /* margin: -21.5px auto 0px; */
    padding: 4px 0px;
}
a.model__link{
    font-family: Oswald;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 31px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    position: absolute;
    top: 219.5px;
}
@media (min-width: 768px){
    .model__items{
        margin: 0px -32px;
    }
    .model__card{
        padding: 0px 32px;
    }
    a.model__link{
        left: 65px;
    }
}
.model__card p{
    background: #191919;
    /* margin: -21.5px 0px 0px; */
    padding: 41px 41px 21px;
    flex: 1 1 auto;
}
.swiper-slide p{
    flex: 1 1 auto;
}
.model__about{
    background-color: #EC5827;
    margin: -122px 0px 0px;
    padding: 152px 0px 72px;
    text-align: center;
}
.model__button {
    text-align: center;
    margin-top: 20px;
    /* padding: 15px 64px; */
}
.model__button a:hover {
    text-decoration: underline;
}
.model__button a {
    background-color: #fff;
    color: #EC5827;
    font-weight: 500;
    border-radius: 0px;
}
.model__text{
    max-width: 851px;
    margin: 0px auto;
}
.text{
    font-family: Roboto;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}
@media (max-width: 991px){
    .model {
        padding-top: 60px;
    }
    .model__title{
        margin-bottom: 12px;
    }
    .model__items{
        margin: 0px -12px;
    }
    .model__card{
        padding: 0px 12px;
    }
    a.model__link{
        left: 43px;
    }
    .model__about{
        padding: 132px 21px 30px;
    }
}
@media (max-width: 767px){
    .model__container{
        max-width: none;
        /* padding: 0px 2.5px; */
    }
    .model__card{
        padding: 0px;
    }
    .model__items{
        margin: 0px;
    }
}
@media (max-width: 480px){
    a.model__link{
        left: 35px;
    }
    .model__button a{
        border-radius: 2px;
    }
    .model__text p{
        text-align: left;
    }
}
.model__swiper{
    display: flex;
}
.slider__container{
    padding: 0px;
    display: flex;
    overflow: hidden;
    width: 100%;
}
.model__slide{
    display: flex;
    flex: 0 1 241px;
}
</style>