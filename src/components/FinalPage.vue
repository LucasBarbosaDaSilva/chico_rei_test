<template>
  <div class="container-final-paige">
    <div > 
      <h1 class="title-final-paige">Finalização do Pedido</h1>
      <div class="contact">
    <h2>Informações de Contato</h2>
    <label for="email">E-mail</label>
    <input type="email" id="email" v-model="email" @input="validarForm" />

    <label for="telefone">Telefone</label>
    <input type="tel" id="telefone" placeholder="(00) 00000-0000" v-model="telefone" @input="validarForm" pattern="\(\d{2}\)\s\d{4,5}-?\d{4}" />
  </div>
      <div class="contact">
    <h2>Informações de entrega</h2>
    <div id="cep-container">
      <label for="cep">CEP</label>
      <input type="text" id="cep" placeholder="Digite aqui o seu CEP" v-model="cep" @input="validarForm">
      <button @click="buscarEndereco" id="button-cep"><img :src="lupa" alt="Minha imagem" id="img-lupa"/></button>
    </div>
    <div class="contact">
      <label for="rua">Rua</label>
      <input type="text" id="rua" v-model="endereco.street">
    </div>
    <div class="contact">
      <label for="bairro">Bairro</label>
      <input type="text" id="bairro" v-model="endereco.neighborhood">
    </div>
    <div class="city">
      <label for="cidade">Cidade</label>
      <input type="text" id="cidade" v-model="endereco.city">
  
      <label for="estado" id="estado-titulo">Estado</label>
      <input type="text" id="estado" v-model="endereco.state">
    </div>
    <div v-if="carregando">Carregando...</div>
  </div>
  <div class="contact">
    <h2>Informações de Pagamento</h2>
    <label for="card-number">Número do Cartão</label>
    <input type="text" id="card-number" v-model="cardNumber" @input="validarForm"/>

    <label for="card-name">Titular do Cartão</label>
    <input type="text" id="card-name" v-model="cardName" @input="validarForm"/>
<div class="city"> 

  <label for="card-expiration">Data de Vencimento</label>
  <input type="text" id="card-expiration" placeholder="00/00" v-model="cardExpiration" @input="validarForm"/>

  <label for="card-cvc" id="cvc">CVC</label>
  <input type="text" id="card-cvc" v-model="cardCvc" @input="validarForm"/>
</div>
  </div>
  <button :disabled="!formValid" @click="finalizarPedido">Finalizar Pedido</button>
    </div>
    <div> 
      <div class="container-produto-final"> 
      </div>
      <div v-for="product in products" :key="product.id" class="produto-final"> 
        
        <div> 
          <h1> Sua sacola</h1>
          <img :src="product.image" class="img-produto-final"/>
        </div>
        <div class="info-produto-final"> 
          <div> 

            <h2>{{ product.name }}</h2>
            <p class="value">R${{ product.price * quantity }}</p>
          </div>
          <div class="counter">
            <button @click="increaseQuantity" class="button-final1">+</button>
            <span class="quantidade-final">{{ quantity }}</span>
           <button @click="decreaseQuantity" class="button-final2">-</button>
             
           
          </div>
        </div>
      </div>

    </div>
  </div>
  
</template>

<script>
import cepPromise from 'cep-promise'
import lupa from '../assets/camisetas/lupa.png'
import { faker } from '@faker-js/faker'
import bolso from '../assets/camisetas/bolso.png'

export default {
  name: 'FinalPage',
  data() {
    return {
      cep: '',
      endereco: {},
      carregando: false,
      email: '',
      telefone: '',
      cardNumber: '',
      cardName: '',
      cardExpiration: '',
      cardCvc: '',
      formValid: false,
      lupa,
      imagens: [bolso],
      products: [],
      quantity: 1,
      totalPrice: 0,
      
    }
  },
  mounted() {
    this.generateProducts();
  },
  methods: {    


    generateProducts() {
      for (let i = 0; i < 1; i++) {
        const product = {
          id: i,
          name: faker.commerce.productName(),
          image: this.imagens,
          price: faker.commerce.price()
        };
        this.products.push(product);
        this.totalPrice = this.products[0].price;
      }
    
    },
    finalizarPedido() {
      this.$swal({
        title: 'Parabéns!',
        text: 'Compra realizada com sucesso',
        icon: 'success'
      });
      console.log(this.products);
      console.log(`Preço total: ${this.totalPrice} `);
    },

    increaseQuantity() {
      this.quantity++;
      this.totalPrice = this.products[0].price * this.quantity;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
        this.totalPrice = this.products[0].price * this.quantity; // atualiza o preço total
      }
    },

    buscarEndereco() {
      this.carregando = true
      cepPromise(this.cep)
        .then(enderec => {
          this.endereco = enderec
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          this.carregando = false
        })
    },

    validarForm() {
    // Validar campos de email e telefone
    const emailRegex = /\S+@\S+\.\S+/
    const telefoneRegex = /^(\d{8}|\d{11})$/
    const emailValido = emailRegex.test(this.email)
    const telefoneValido = telefoneRegex.test(this.telefone)
    
    // Validar campo de CEP
    const cepValido = this.endereco.cep && this.endereco.cep.length === 8
    
    // Validar campos de cartão de crédito
    const cardNumberValido = /^\d{16}$/.test(this.cardNumber)
    const cardNameValido = this.cardName.trim().length > 0
    const cardExpirationValido = /^\d{2}\/\d{2}$/.test(this.cardExpiration)
    const cardCvcValido = /^\d{3}$/.test(this.cardCvc)
    
    // Verificar se todos os campos estão válidos
    this.formValid = (
      emailValido &&
      telefoneValido &&
      cepValido &&
      cardNumberValido &&
      cardNameValido &&
      cardExpirationValido &&
      cardCvcValido
    )
  }
  }
}
</script>






<style lang="less" scoped>
@import "../assets/styles/FinalPage.less";
</style>
