<template>
    <div class="grid-wrap">
        <div class="product-item" :key="product.id" v-for="product in products">
            <img v-bind:src="product.imageUrl" alt="" />
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}</p>
            <router-link :to="'/products/' + product.id">
                <button>View Detail</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsList',
    props: ['products']
}
</script>