<template>
  <div>
    <router-link to="/camisetas">Camisetas</router-link>
    <router-link to="/estampadas">Estampadas</router-link>
    <router-view></router-view>
  </div>
 </template>
 
 <script>
 export default {
   name: 'HomePage',
   props: {
     msg: String
   }
 }
 </script>
 
 
 <style lang="less">
  @import "../assets/styles/Homepage.less";
 
 </style>