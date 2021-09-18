<template>
    <div class="main-baner">
        <div class="container">
            <div class="main-baner__img card">
                <picture>
                    <source media="(max-width: 767px)" srcset="../../public/images/landing_page_2/img1_mobile.jpg">
                    <img src="../../public/images/main_baner/img1.jpg" class="" alt="...">
                </picture>
                <div class="main-baner__body card-img-overlay col-md-6">
                    <h5 class="main-baner__title">МАСКА ИНДИВИДУАЛЬНОГО ПОЛЬЗОВАНИЯ</h5>
                    <p class="main-baner__text mb-4">Маска стала необходимой вещью способной помочь людям чувствовать себя более уверенно современных городских условиях.</p>
                    <ButtonSimple/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonSimple from '../components/ButtonSimple.vue'
export default {
    name:"MainBaner",
    components:{
        ButtonSimple
    }
}
</script>

<style scoped>
button.button {
    margin: 0px;
}
.card {
    border:none;
    border-radius: none;
}
.main-baner__img img{
    /* max-width: 100%; */
    width: 100%;
    height: 100%;
    object-fit: none;
}
.main-baner__body {
    padding: 37px 0px 0px 67px;
}
.main-baner__title{
    font-family: 'Oswald';
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    text-transform: uppercase;
    color: #FFFFFF;
}
.main-baner__text {
    font-size: 15px;
    line-height: 21px;
    color: #FFFFFF;
}
@media (max-width:992px) {
    .main-baner__body {
    padding: 15px 0px 0px 15px;
}
    .main-baner__title {
        font-size: 36px;
        line-height: 42px;
    }
}
@media (max-width:767px) {
    .main-baner__img {
        margin: 57px -21px 0px;
    }
    .main-baner__img img{
        object-fit: fill;
    }
}
@media (max-width: 480px) {
    .main-baner__body {
        text-align: center;
        padding: 0px;
        display: flex;
        /* flex-wrap: wrap; */
        flex-direction: column;
        justify-content: flex-end;
    }
    .main-baner__title {
        margin-bottom: 25px;
    }
    .main-baner__text {
        display: none;
    }
    .main-baner__button {
        align-self: center;
        margin-bottom: 42px;
    }
}
</style>
