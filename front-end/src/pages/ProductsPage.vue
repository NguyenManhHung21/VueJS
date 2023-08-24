<template>
    <h1>Products</h1>
    <ProductsList :products="products" />
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import axios from 'axios';
export default {
    name: 'ProductsPage',
    data() {
        return {
            products: [],
        };
    },
    components: { ProductsList },
    async created() {
        const { data } = await axios.get('/api/products');
        this.products = data;
    }

}
</script>