<template>
    <div>
        <mainbaner/>
        <CatalogMasks/>
        <Designer/>
        <Model/>
        <Production/>
        <Advantages/>
    </div>
</template>

<script>
import mainbaner from '../pages/MainBaner.vue';
import CatalogMasks from '../pages/CatalogMasks';
import Designer from '../pages/Designer'; 
import Model from '../pages/Model';
import Production from '../pages/Production';
import Advantages from '../pages/Advantages.vue';

export default {
    name: "MaskLandingPage",
	components: {
        mainbaner,
        CatalogMasks,
        Designer,
        Model,
        Production,
        Advantages
	}
}
</script>

<style scoped>

</style>