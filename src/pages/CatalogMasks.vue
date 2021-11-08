<template>
    <div class="catalog">
        <div class="container">
            <h4 class="catalog__title">{{cards.CatalogTitle}}</h4>
            <div class="catalog__cards row g-0">
                <div class="col-6 col-md-4 col-lg-3 js-catalog-mask-item" v-for="(card, index) in cards.cards" :key="index">
                    <div class="catalog__card">
                        <router-link 
                        :to="{name:'Masks', params: {id: card.id}}">
                            <img :src="card.CatalogImage" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card__subtitle"><strong>Маска анатомическая</strong><br>{{card.name}}</p>
                                <div class="card-body__price row">
                                    <span class="card__price">{{card.price}} ₽</span>
                                    <button class="body__korzina">
                                        <img src="/images/icon-svg/korzina_plus.svg" alt=""/>
                                    </button>
                                </div>
                                <!-- <button class="body__korzina m-w-480 between">
                                    <p>В корзину</p> <span></span>
                                </button> -->
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- <button type="button" class="catalog__button button" 
            :class="{active:isActive}"
            @click="isActive = !isActive"
            >
                Показать все
            </button> -->
            <ButtonArrows/>
        </div>
    </div>
</template>
<script>
import data from '../mock/cards.json'
import ButtonArrows from '../components/ButtonWithArrow.vue'
export default {
    name:"catalogMasks",
    components:{
        ButtonArrows
    },
    data () {
        return {
            cards: data.products,
            isActive: false
        }
    },
    mounted () {
        console.log(this.cards);
    }
}
</script>

<style scoped>
.catalog{
    padding: 40px 0px 72px;
}
.catalog__title{
    font-family: Oswald;
    font-weight: 600;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 26px;
}
.catalog__cards{
    margin: 0px -10px;
    padding-bottom: 16px;
}
.js-catalog-mask-item {
    padding: 0px 10px;
    margin-bottom: 20px;
}
.catalog__card{
    border: 1px solid #EC5827;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.card-img, .card-img-top {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
}
.card-body {
    padding: 16px 19px 39px;
    display: flex;
    flex-direction: column;
}
button.body__korzina{
    background-color: #EC5827;
    width: 43px;
    height: 25px;
    align-self: flex-end;
    margin-right: 10.5px;
}
.card-body__price {
    /* padding: 0px 19px; */
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
}
.card__subtitle {
    font-size: 17px;
    line-height: 20px;
    color: #191919;
    flex: 1 1 auto;
}
.card__price {
    width: auto;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #191919;
}
.catalog__button.button {
    display: block;
    padding: 13px 76px!important;
    text-align: center;
    margin: 16px auto 0px;
    position: relative;
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    background-color:  #EC5827;
}
.catalog__button::before,
.catalog__button::after{
    content: '';
    position: absolute;
    top: 20px;
    width: 10px;
    height: 1px;
    background-color: #fff;
    transition: all 0.3s;
}
.catalog__button::before{
    right: 48px;
    transform: rotate(145deg);
}
.catalog__button::after{
    right: 56px;
    transform: rotate(-145deg);
}
.catalog__button.active::before{
    transform: rotate(-145deg);
}
.catalog__button.active::after{
    transform: rotate(145deg);
}
@media (max-width: 768px) {
    .catalog{
    padding: 20px 0px 40px;
    }
    .catalog__cards{
    margin: 0px -7.5px;
    }
    .js-catalog-mask-item {
        padding: 0px 7.5px;
        margin-bottom: 15px;
    }
}
@media (max-width: 480px) {
    .card-body {
    padding: 15px 10px 15px;
    }
    .card__subtitle{
        font-size: 12px;
        line-height: 14px;
    }
    .card__price{
        font-size: 15px;
        line-height: 18px;
    }
}
</style>