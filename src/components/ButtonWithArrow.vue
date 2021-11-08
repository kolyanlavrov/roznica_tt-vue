<template>
    <button type="button" class="button-arrows"
    :class="{active:isActive}"
    @click="isActive = !isActive; $router.push('/catalogmasks')"
    >
    Показать все
    </button>
</template>

<script>
export default {
    name:"ButtonArrows",
    data ( ) {
        return {
            isActive: false
        }
    }
}
</script>

<style scoped>
.button-arrows {
    display: block;
    position: relative;
    margin: 0 auto;
    background: #EC5827;
    padding: 13px 76px;
    font-family: Roboto;

    color: #FFFFFF;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

}
.button-arrows::before,
.button-arrows::after {
    content: '';
    position: absolute;
    top: 21px;
    width: 9px;
    height: 1px;
    background-color: #fff;
    transition: all 0.3s;
}
.button-arrows::before {
    right: 62px;
    transform: rotate(35deg);
}
.button-arrows::after {
    right: 55px;
    transform: rotate(-35deg);
}
.button-arrows.active::before {
    transform: rotate(-35deg);
}
.button-arrows.active::after {
    transform: rotate(35deg);
}
</style>