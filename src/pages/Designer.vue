<template>
    <div class="designer">
        <div class="container">
            <div class="row mx-0 designer__body">
                <div class="col-12 col-md-6 px-0">
                    <div class="designer__video-body">
                        <div class="designer__video">
                            <ThumbVideo/>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 row mx-0 px-0">
                    <div class="designer__characteristic-body">
                        <div class="designer__characteristic characteristic">
                            <h3 class="characteristic__title">Маски от дизайнерского дома Татьяны Тягиной</h3>
                            <p class="characteristic__text">Маски cозданы в лучших традициях аксессуаров индивидуальной защиты. Известно, что обычная продукция не обладает анатомическими особенностями. Наши дизайнеры устранили этот недостаток. Тканевые маски оптом, которые вы можете заказать у нас, оснащены вытачками у подбородка и анатомической пластинкой в верхней части. Это позволяет более эффективно закрепить маску на лице.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ThumbVideo from './Thumbs.vue'
    export default {
        name:"Designer",
        components :{
            ThumbVideo
        }
    };
</script>

<style scoped>
.designer{
    background: #F2F2F2;
}
.designer__video-body {
    padding-top: 124px;
}
.designer__video {
    position: relative;
    z-index: 1;
}
.designer__characteristic-body {
    background: #EC5827;
    margin-left: -42px;
    padding-top: 124px;
    padding-left: 78px;
    display: flex;
}
.designer__characteristic {
    padding-right: 29px;
}
.characteristic__title {
    font-family: Oswald;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 20px;
}
.characteristic__text {
    font-size: 17px;
    line-height: 24px;
    color: #FFFFFF;
}
.swiper-container.swiper.gallery-thumbs {
    margin-top: 28px;
}
@media (max-width:767px) {
    .designer__body {
        position: relative;
    }
    .designer__video-body {
        padding-top: 20px;
    }
    .designer__characteristic-body {
        margin: -113px -21px 0px;
        padding: 113px 21px 85px;
    }
    .designer__characteristic {
        padding-right: 0px;
    }
    .characteristic__title {
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 10px;
    }
    .characteristic__text {
        font-size: 15px;
        line-height: 21px;
    }
}

</style>