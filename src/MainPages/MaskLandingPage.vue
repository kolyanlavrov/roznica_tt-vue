<template>
    <div>
        <mainbaner/>
        <CatalogMasks/>
        <Designer/>
        <Model/>
        <Production/>
        <Advantages/>
        <Opt/>
        <Materials/>
        <Map/>
        <Footer/>
    </div>
</template>

<script>
import mainbaner from '../pages/MainBaner.vue';
import CatalogMasks from '../pages/CatalogMasks';
import Designer from '../pages/Designer'; 
import Model from '../pages/Model';
import Production from '../pages/Production';
import Advantages from '../pages/Advantages.vue';
import Opt from '../pages/Opt.vue';
import Materials from '../pages/Materials.vue';
import Map from '../pages/Map.vue';
import Footer from '../pages/Footer.vue'

export default {
    name: "MaskLandingPage",
	components: {
        mainbaner,
        CatalogMasks,
        Designer,
        Model,
        Production,
        Advantages,
        Opt,
        Materials,
        Map,
        Footer
	},
}
</script>

<style>

</style>