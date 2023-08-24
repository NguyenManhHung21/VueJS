<template>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
        <ShoppingCartList @remove-from-cart="handleRemoveProduct($event)" :cartItems="cartItems" />
        <button class="checkout-button">Proceed to Checkout</button>
    </div>
    <div v-if="cartItems.length === 0">
        <h3>You current have no items in your cart!</h3>
    </div>
</template>


<script>
import ShoppingCartList from '@/components/ShoppingCartList.vue';
import axios from 'axios';

export default {
    name: 'ShoppingCartPage',
    data() {
        return {
            cartItems: [],
            userId: this.user?.uid,
        };
    },
    props: ['user'],
    watch: {
        async user(newUserEmail, oldUserEmail) {
            if (newUserEmail) {
                try {
                    const { data } = await axios.get(`api/users/${newUserEmail.uid}/cart`)
                    this.cartItems = data;

                    console.log(oldUserEmail);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    components: { ShoppingCartList },
    methods: {
        async handleRemoveProduct(productId) {
            try {
                const { data } = await axios.delete(`/api/users/${this.userId}/cart/${productId}`);
                this.cartItems = data.cartItems;
                if (data.ok === 1) alert('Remove from cart successfully!');
                else alert('Remove failed!');
            } catch (error) {
                console.log(error);
            }
        }
    },
    async created() {
        if (this.user) {
            const { data } = await axios.get(`api/users/${this.userId}/cart`)
            this.cartItems = data;
        }
    },
    
}
</script>