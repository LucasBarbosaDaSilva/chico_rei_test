<template>
 <Home />
 <router-view></router-view>
</template>

<script>
import Home from './components/HomePage.vue'


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
