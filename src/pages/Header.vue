<template>
    <div>
        <nav class="nav">
            <div class="container">
                <div class="menu">
                    <div class="menu__title title header__logo">
                        <a href="#">маски.tt</a>
                    </div>
                    <div class="menu__link">
                        <div class="menu__tell">
                            <a href="tel:+7 (495) 323-89-99">+7 (495) 323-89-99</a>
                        </div>
                        <div class="menu__facebook link">
                            <a href="https://www.facebook.com/"><img src="../assets/images/icon-svg/facebook.svg" alt=""></a>
                        </div>
                        <div class="menu__youtube link">
                            <a href="#"><img src="../assets/images/icon-svg/youtube.svg" alt=""></a>
                        </div>
                        <div class="menu__insta link">
                            <a href="#"><img src="../assets/images/icon-svg/insta.svg" alt="" /></a>
                        </div>
                        <div class="menu__vk link">
                            <a href="#"><img src="../assets/images/icon-svg/vk.svg" alt="" /></a>
                        </div>
                        <div class="menu__ok link">
                            <a href="#"><img src="../assets/images/icon-svg/ok.svg" alt="" /></a>
                        </div>
                        <div class="menu__korzina">
                            <a href="#"><img src="../assets/images/icon-svg/korzina.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <header class="header">
            <div class="container">
                <div class="header__body">
                    <div class="header__burger"
                    :class="{active:isActive}"
                    @click="isActive = !isActive">
                        <span></span>
                    </div>
                    <div class="menu__title title header__logo">
                        <a href="#">маски.tt</a>
                    </div>
                    <nav class="header__menu"
                    :class="{active:isActive}"
                    @click="isActive = !isActive">
                        <ul class="header__list">
                            <li>
                                <a href="#" class="header__link">Вопросы</a>
                            </li>
                            <li>
                                <a href="#" class="header__link">Отзывы</a>
                            </li>
                            <li>
                                <a href="#" class="header__link">Характеристики</a>
                            </li>
                            <li>
                                <a href="#" class="header__link">Описание</a>
                            </li>
                            <li>
                                <a href="#" class="header__link">Кoнтакты</a>
                            </li>
                            <li>
                                <a href="#" class="header__link">Маски</a>
                            </li>
                        </ul>
                    </nav>
                    <ul class="header__icons px-0">
                        <li>
                            <a href="#" class="header__tell">
                                <img src="../assets/images/icon-svg/tell.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#" class="header__location">
                                <img src="../assets/images/icon-svg/location.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "mainheader",
    data() {
        return {
            isActive: false
        };
    }
};
</script>

<style scoped>
.menu__title a {
    font-size: 40px;
    line-height: 59px;
    color: #ec5827;
    text-decoration: none;
}
.menu__link {
    display: flex;
    align-items: center;
}
.menu__tell a {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #000000;
    margin-right: 14px;
}
.link {
    margin-right: 9px;
}
.menu__korzina {
    margin: 0px 17px 0px 22px;
}
/* ==============================================MENU BURGER============================= */
/* ======================Фиксированная шапка меню Бургера */
.header{
    display: none;
    font-family: "Oswald", sans-serif;
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 50;
}
/* ........................Плашка................. */
.header::before{
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 2;
}
/* //////////////////////////////////////////////////// */
.header__body{
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 57px;
    align-items: center;
}
.header__logo{
    font-weight: 600;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    text-transform: uppercase;
    color: #EC5827;
    position: relative;
    z-index: 3;
}
.header__icons{
    display: none;
}
.header__burger{
    display: none;
}
.header__list{
    display: flex;
    position: relative;
    z-index: 3;
}
.header__list li{
    margin: 0px 0px 0px 20px;
}
.header__link{
    color: #EC5827;
    text-transform: uppercase;
    font-size: 18px;
}
@media (max-width: 767px) {
    body.lock{
        overflow: hidden;
    }
    .header{
        display: block;
    }
    nav.nav{
        display: none;
    }
    .header__burger{
        display: block;
        position: relative;
        width: 20px;
        height: 19px;
        position: relative;
        z-index: 3;
    }
    .header__burger span{
        position: absolute;
        top: 8px;
        left: 0px;
        background-color:  #EC5827;
        width: 100%;
        height: 3px;
        border-radius: 1px;
        transition: all 0.3s ease 0s;
    }
    .header__burger::before,
    .header__burger::after{
        content: "";
        background-color:  #EC5827;
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 1px;
        left: 0px;
        transition: all 0.3s ease 0s;
        /* transition: all 0.3s ease 0s; - Плавність трансформації меню бургер */
    }
    .header__burger::before{
        top: 0px;
    }
    .header__burger::after{
        bottom: 0px;
    }
    .header__burger.active span{
        transform: scale(0);
    }
    .header__burger.active::before{
        transform: rotate(45deg);
        top: 8px;
    }
    .header__burger.active::after{
        transform: rotate(-45deg);
        bottom: 8px;
    }
    /* ============================
        top: -100%; - Меню відкривається зверху
        transition: all 0.3s ease 0s; - Плавність відкриття меню
    ==================================
    */
    .header__menu{
        position: fixed;
        top: -100%;
        left: 0px;
        width: 100%;
        height: 100%;
        overflow: auto;
        transition: all 0.5s ease 0s;
        background-color: #E2E2E2;
        padding: 70px 10px 20px 10px;
    }
    .header__menu.active{
        top: 0px;
    }
    .header__icons{
        display: flex;
        position: relative;
        z-index: 3;
    }
    .header__icons li:last-child{
        margin-left: 20px;
    }
    .header__list{
        display: block;
    }
    .header__list li{
        margin: 0px 0px 40px 0px;
        text-align: center;
    }
    .header__link{
        font-size: 24px;
    }
    .content{
        padding-top: 60px;
    }
    .header__logo {
        margin-left: 20px;
    }
}
</style>