<template>
  <div class="HomePage">

    <h1>Camisetas</h1>
    <div class="home-page">
      <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.image" />
      <div class="product-item-info">
        <div class="product-name"> 
          <h2>{{ product.name }}</h2>
        </div>
        <div class="product-description"> 
          <p class="description">{{ product.description }}</p>
        </div>
        <div class="product-price"> 
          <p class="value">R${{ product.price }}</p>
        </div>
    </div>
    </div>
  </div>
  </div>
  </div>
 </template>
 
 <script>
 import { faker } from '@faker-js/faker';
 export default {
   name: 'CamisetaBasica',
   props: {
     msg: String
   },
   data() {
    return {
      products: []
    };
  },
  mounted() {
    this.generateProducts();
  },
  methods: {
    generateProducts() {
      for (let i = 0; i < 15; i++) {
        const product = {
          id: i,
          name: faker.commerce.productName(),
          image: faker.image.people(),
          description: faker.commerce.productDescription(),
          price: faker.commerce.price()
        };
        this.products.push(product);
      }
    }
  }
 }
 </script>
 
 
 <style lang="less">
  @import "../assets/styles/Homepage.less";
 
 </style>