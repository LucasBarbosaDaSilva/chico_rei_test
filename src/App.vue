<template>
 <Home />
 <!-- <FinalPage /> -->
 <router-view></router-view>
</template>

<script>
import Home from './components/HomePage.vue'
// import NavBar from './components/NavBar.vue'
// import FinalPage from './components/FinalPage.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
  
}
</script>

<style>
body, html {
  background-color: #e6e8eb;
  overflow-x: hidden;
}
</style>
