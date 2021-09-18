<template>
    <div class="map">
        <div class="map__container">
            <div class="map__main">
                <img :src="Maps.MapImage1" alt="map" class="d-n-480">
                <img class="absolute" :src="Maps.MapLocation" alt="">
                <img :src="Maps.MapImage2" alt="map" class="d-b-480">
            </div>
            <div class="map__contacts">
                <h2 class="map__title">{{Maps.MapTitle}}</h2>
                <div class="map__text">
                    <div class="map__subtitle">
                        <a href="tel:+74953570533">{{Maps.MapTell1}}</a>
                        <p>телефон в Москве <br> ежедневно с 10:00 до 21:00</p>
                    </div>
                    <div class="map__subtitle">
                        <a href="tel:88005558988">{{Maps.MapTell2}}</a>
                        <p>бесплатная линия по России ежедневно с 10:00 до 21:00</p>
                    </div>
                    <div class="map__subtitle">
                        <a href="#"> Адрес шоу-рума</a>
                        <p>Москва <br>{{Maps.MapAdress}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../mock/map.json'
export default {
    name: "Map",
    data () {
        return {
            Maps: data.MapMain
        }
    }
}
</script>

<style scoped>
.map__container{
    max-width: 1096px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
}
.map__main{
    position: relative;
}
.map__main img:first-child{
    width: 100%;
    height: 100%;
    object-fit:contain;
}
.map__main img.absolute{
    position: absolute;
    top: 38%;
    left: 32%;
}
.map__contacts{
    display: flex;
    flex-direction: column;
    background: #191919;
    position: absolute;
    top: 9%;
    right: 3.2%;
    max-width: 326px;
    padding: 30px 28px;
}
.map__title{
    font-family: Oswald;
    font-weight: 600;
    font-size: 36px;
    line-height: 53px;
    text-transform: uppercase;
    color: #EC5827;
}
.map__text{
    font-family: Roboto;
    font-style: normal;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}
.map__text div{
    margin-top: 13px;
}
.d-b-480{
    display: none;
}
.d-n-480{
    display: block;
}
@media (max-width: 991px) {
    .map__text{
        display: flex;
        width: 100%;
    }
    .map__title{
        text-align: center;
    }
    .map__subtitle{
        flex: 0 1 33.3333%;
    }
    .map__contacts{
        position: relative;
        top: 0px;
        right: 0px;
        max-width: 100%;
        padding: 15px 20px;
    }
}
.map__subtitle a{
    color: #FFFFFF;
    font-weight: 700;
}
@media (max-width: 480px) {
    .map__main img:first-child{
        object-fit: cover;
    }
    .map__main img.absolute{
        left: 8%;
    }
    .map__contacts{
        padding: 20px 36px 41px;
        position: absolute;
        top: 442px;
        margin: 0px 21px;
    }
    .map__text{
        flex-direction: column;
    }
    .map__title{
        text-align: left;
    }
    .d-b-480{
        display: block;
    }
    .d-n-480{
        display: none;
    }
}
</style>