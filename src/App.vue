<template>
  <div>
    <header-component/>
    <router-view/>
  </div>
</template>
 
<script>
import HeaderComponent from './HeaderComponent.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    HeaderComponent,
  }
}
</script>

<style setup >

</style>
