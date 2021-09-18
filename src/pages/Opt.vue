<template>
    <div class="opt">
        <div class="container">
            <div class="opt__title title">покупка масок оптом</div>
            <ul class="opt__list row">
                <li>
                    <p>1</p> 
                    <p>Вы оставляете заявку</p>
                </li>
                <li>
                    <p>2</p> 
                    <p>Мы подтверждаем заказ по телефону</p>
                </li>
                <li>
                    <p>3</p> 
                    <p>Получаем оплату</p>
                </li>
                <li>
                    <p>4</p> 
                    <p>Изготавливаем первую партию в течении 24 часов
                    </p>
                </li>
                <li>
                    <p>5</p> 
                    <p>Доставляем вам заказ
                    </p>
                </li>
            </ul>
            <div class="opt__text text">
                <p>При заказе обязательно указывайте желаемый объем. Мы поставляем изделия как мелким, так и крупным оптом. Можем выполнить изделие в различных оттенках, например</p>
            </div>
            <!-- <div class="opt__button button">
                <a href="#">Заказать</a>
            </div> -->
            <ButtonSimple/>
        </div>
    </div>
</template>

<script>
import ButtonSimple from '../components/ButtonSimple.vue'
export default {
    name:"Opt",
    components: {
        ButtonSimple
    }
}
</script>

<style scoped>
.opt{
    padding: 25px 0px 72px 0px;
}
@media (min-width: 768px) and (max-width: 991px) {
    .opt{
        padding: 10px 0px 22px 0px;
    }
}
.opt__title{
    font-size: 36px;
    line-height: 53px;
    text-align: center;
}
.opt__list{
    color: #EC5827;
    padding: 27px 0px 21px 0px;
    flex-wrap: nowrap;
}
.opt__list li{
    border-left: 1px solid #EC5827;
    padding-left:10px;
    flex: 0 1 221px;
}
.opt__list li:last-child{
    flex: 0 1 140px;
}
.opt__list p:first-child{
    font-family: Oswald;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    text-transform: uppercase;
}
.opt__list p:last-child{
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
}
.opt__text{
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    max-width: 744px;
    margin: 0 auto;
    color: #000000;
    margin-bottom: 25px;
}
.opt__button{
    text-align: center;
    margin-top: 30px;
}
@media (max-width: 991px) {
    .opt__list{
        flex-wrap: wrap;
        justify-content: center;
    }
    .opt__list li{
        border-left: none;
        flex: 0 1 100%;
        text-align: center;
    }
    .opt__list li:last-child{
    flex: 0 1 100%;
}
}
@media (max-width: 480px) {
    .opt{
        padding: 0px 0px 40px;
    }
    .opt__title{
        font-size: 24px;
        line-height: 36px;
    }
    .opt__list {
        padding: 9px 0px 21px;
        text-align: center;
    }
    .opt__list.row{
        flex-wrap: wrap;
    }
    .opt__list li{
        border-left: none;
        flex: 0 1 100%;
        padding-left: 0px;
        margin-bottom: 10px;
    }
    .opt__list li:last-child{
        flex: 0 1 100%;
    }
}
</style>