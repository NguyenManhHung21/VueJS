<template lang="">
    <div class="text-center">
        <div class="  md:order-2  mb-14">
            <div class="relative w-full inline">
              <input v-model="search" type="search" id="search-dropdown" class="inline-block p-2.5 z-20 text-md text-gray-900 w-96 bg-gray-50 rounded-r-lg rounded-tl-xl rounded-bl-xl border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." required>
              <button  @click="searchStd" class="absolute right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "><svg aria-hidden="true" class="w-5 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            </div>
        </div>
        <student-list  ref="child"/>
    </div>
</template>
<script>
import StudentList from './StudentList.vue'
export default {
    components: {
        StudentList
    },
    data() {
        return {
            search: '',
        }
    },
    methods: {
        searchStd() {
            this.$refs.child.searchStd(this.search)
        }
    }
}
</script>
<style lang="">
    
</style>