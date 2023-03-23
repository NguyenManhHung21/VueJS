<template lang="">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Quản lý Sinh Viên</h1>
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
              <div class="items-center justify-evenly w-full flex  md:order-1" id="navbar-search">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <router-link to='/' class="block text-xl py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent text-gray-700 hover:bg-gray-100 hover:text-blue-700">Trang chủ</router-link>
                  </li>
                  <li>
                    <router-link to='/addsv' class="block text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  hover:text-blue-700">Thêm SV</router-link>
                  </li>
                  <li>
                    <router-link to='/search' class="block text-xl py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  hover:text-blue-700">Search</router-link>
                  </li>
                </ul>
            </div>
          </nav>
    </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style lang="">
    
</style>