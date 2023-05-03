<template>
  <div class="HomePage">

    <h1>Hello World com Vue!</h1>
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