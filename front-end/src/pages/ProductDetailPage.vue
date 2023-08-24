<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" alt="">
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>
            <button @click="handleAddProduct" class="add-to-cart" v-if="user && !itemIsInCart">Add to cart</button>
            <button disabled class="grey-button" v-if="user && itemIsInCart">Item is already in cart</button>
            <button class="sign-in" @click="handleSignIn" v-if="!user">Sign in to add to cart</button>
        </div>
    </div>

    <div v-else>
        <NotFoundPage />
    </div>
</template>

<script>
import NotFoundPage from './NotFoundPage.vue';
import axios from 'axios';
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { auth } from '@/firebase'

export default {
    name: 'ProductDetialPage',
    data() {
        return {
            productId: this.$route.params.productId,
            product: {},
            userId: this.user?.uid,
            cartItems: []
        };
    },
    props: ['user'],
    watch: { //theo dõi sự thay đổi khi log out, log in email khác
        async user(newUserEmail, oldUserEmail) {
            if (newUserEmail) {
                try {
                    const { data } = await axios.get(`/api/products/${this.productId}`);
                    this.product = data
                    const response = await axios.get(`/api/users/${newUserEmail.uid}/cartIds`);
                    this.cartItems = response.data;

                    console.log(oldUserEmail);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    methods: {
        async handleAddProduct() {
            try {
                const { data } = await axios.post(`/api/users/${this.userId}/cart`, { productId: this.productId });
                if (data.ok === 1) alert('Add to cart successfully!');
                else alert('Failed add to cart!')

            } catch (error) {
                console.log(error);
            }
        },
        async handleSignIn() {
            const email = prompt('Please enter your email to sign in: ');
            const actionCodeSettings = {
                url: `http://localhost:8080/products/${this.productId}`,
                handleCodeInApp: true
            };
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);

            alert('A login link was sent to the email that you provided!');
            localStorage.setItem('emailForSignIn', email);

        }
    },
    computed: {
        itemIsInCart() {
            console.log(this.cartItems.some(id => id === this.productId));
            return this.cartItems.some(id => id === this.productId);
        }
    },
    components: { NotFoundPage },
    async created() {
        try {
            if (isSignInWithEmailLink(auth, window.location.href)) {
                const email = localStorage.getItem('emailForSignIn');
                await signInWithEmailLink(auth, email, window.location.href);
                alert('Successfully signed in!');
                localStorage.removeItem('emailForSignIn');
            }
            console.log(this.user);
            
            const { data } = await axios.get(`/api/products/${this.productId}`);
            this.product = data
            if(this.user) {
                const response = await axios.get(`/api/users/${this.userId}/cartIds`);
                this.cartItems = response.data;
            }
        } catch (error) {
            console.log(error);
        }

    }
}
</script>