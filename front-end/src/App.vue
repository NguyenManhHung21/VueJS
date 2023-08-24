<template>
  <NavBar :user="user"/>
  <div class="page-wrap">
    <router-view :user="user"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export default {
  name: 'App',
  data() {
    return {
      user: null,
    }
  },
  components: {
    NavBar, 
  },
  created() {
    onAuthStateChanged(auth, user => this.user = user);
  },

  
}
</script>
