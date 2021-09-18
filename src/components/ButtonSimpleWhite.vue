<template>
    <button type="button" class="button">
        <router-link to="#">Заказать</router-link>
    </button>
</template>

<script>
export default {
    name:"ButtonSimpleWhite"
}
</script>

<style scoped>
button.button {
    background: #fff;
    padding: 13px 86px;
    display: block;
    margin: 25px auto 0px;
}
button.button:hover {
    background: #FF7E53;
    /* border-radius: 4px; */
    text-decoration: none;
    color: #FFFFFF;
}
button.button:active {
    background: #AB3A15;
}
.button a {
    color:#EC5827;
    text-transform: capitalize;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
}
@media (max-width:480px) {
    button.button {
    padding: 13px 64.5px;
    }
}
</style>