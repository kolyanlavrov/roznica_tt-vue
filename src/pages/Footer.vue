<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__title">маски.tt</div>
                <div class="footer__links">
                    <div class="footer__tell">
                        <a href="tel:+74953238999">+7 (495) 323-89-99</a>
                    </div>
                    <div class="footer__items">
                        <div class="footer__facebook link">
                            <a href="#"><img src="images/footer/facebook.svg" alt=""></a>
                        </div>
                        <div class="footer__youtube link">
                            <a href="#"><img src="images/footer/yt.svg" alt=""></a>
                        </div>
                        <div class="footer__insta link">
                            <a href="#"><img src="images/footer/insta.svg" alt=""></a>
                        </div>
                        <div class="footer__vk link">
                            <a href="#"><img src="images/footer/vk.svg" alt=""></a>
                        </div>
                        <div class="footer__ok link">
                            <a href="#"><img src="images/footer/ok.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__korzina cart-not-empty d-b-480">
            <img src="images/footer/korzina-orange.svg" alt="">
        </div>
    </footer>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
.footer{
    background: #191919;
    position: relative;
}
.footer__container{
    padding: 24px 0px;
    display: flex;
    justify-content: space-between;
    /* align-items: baseline; */
}
@media (max-width: 991px){
    .footer__container{
        padding: 0px;
    }
}
.footer__title{
    font-family: Oswald;
    font-weight: 500;
    font-size: 40px;
    line-height: 55px;
    text-transform: uppercase;
    color: #C4C4C4;
}
.footer__links{
    display: flex;
    align-items: center;
    /* justify-content: flex-end; */
}
.footer__items{
    display: flex;
}
.link {
    margin-right: 9px;
}
.footer__items div:last-child{
    margin-right: 0px;
}
.footer__tell{
    margin-right: 14px;
}
.footer__tell a{
    color: #FFFFFF;
    font-weight: 700;
}
@media (max-width: 480px){
    .footer__container{
        flex-direction: column;
        padding: 36px 0px 40px;
        text-align: center;
    }
    .footer__links{
        flex-direction: column;
    }
    .footer__title{
        font-size: 36px;
        line-height: 53px;
        color: #4F4F4F;
    }
    .footer__tell{
        padding: 5px 0px 15px;
        margin-right: 0px;
    }
    .footer__tell a{
        color: #4F4F4F;
        font-size: 21px;
        line-height: 25px;
    }
    .footer__korzina{
        position: absolute;
        top: 60px;
        right: 21px;
        background: #fff center;
        width: 54px;
        height: 54px;
        border-radius: 50%;
    }
    .footer__korzina img{
        position: absolute;
        top: 13px;
        right: 15px;
    }
}
</style>