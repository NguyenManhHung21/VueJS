<template>
    <div class="nav-bar">
        <router-link to="/products" class="products-link">
            <div class="logo-wrap" >
                <img v-bind:src="logo" alt="">
            </div>
        </router-link>
        <div class="nav-buttons-wrap">
            <button class="sign-out" @click="signOut" v-if="user">Sign Out</button>
            <router-link to="/cart"  >
                <button>Shopping Cart</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/logo-hexagon.svg'
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
export default {
    name: 'NavBar',
    props: ['user'],
    data() {
        return {
            logo,
        }
    },
    methods: {
        signOut() {
            signOut(auth)
        }
    },
    created() {
        console.log(this.user);
    }
}
</script>