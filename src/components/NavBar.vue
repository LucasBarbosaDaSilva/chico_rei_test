<template>
  <div class="navbar">
    <button @click="toggleMenu" class="navbar-button">
      <span class="navbar-icon"></span>
    </button>
    <div class="navbar-items" :class="{ active: isMenuOpen }">
      <button @click="toggleMenu" class="navbar-close"></button>
      <p class="title-menu">Menu</p>
      <ul class="container-title">
        <li>
          <router-link to="/" class="container-title-menu">Home</router-link>
        </li>
        <li>
          <router-link to="/checkout" class="container-title-menu">Finalização de Pedidos</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
@font-family: 'Ysabeau', sans-serif;

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.title-menu{
  font-family: @font-family;
  font-size: 35px;
  margin-left: 1vh;
  font-weight: 600;
}
.container-title {
  display: flex;
  flex-direction: column;
}
.container-title-menu {
  display: flex;
  font-family: @font-family;
  font-size: 30px;
  margin-top: 8vh;
  justify-content: center;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  .navbar-button {
  position: absolute;
  top: 15%;
  right: 20px; /* alterado */
  width: 70px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  z-index: 2;
}

.navbar-icon {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg); // adicionei "rotate(0deg)" para corrigir a orientação do ícone
    display: block;
    width: 30px;
    height: 2px;
    background-color: #333;
    transition: all 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }
}

&:hover .navbar-icon,
&:focus .navbar-icon {
  background-color: #f54d1af5;

  &::before,
  &::after {
    background-color: #f54d1af5;
  }
}

&:active .navbar-icon {
  transform: scale(0.8);
}
}
.navbar-items {
  position: fixed;
  top: 0;
  left: -100%; // mudei o valor de "left" para "right"
  width: 20%;
  height: 100%;
  background-color: #fff;
  transition: all 0.5s ease-in-out;

  &.active {
    left: 0; // mudei o valor de "left" para "right"
  }

.navbar-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  z-index: 2;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #333;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover::before,
  &:focus::before,
  &:hover::after,
  &:focus::after {
    background-color: #e91e63;
  }

  &:active::before,
  &:active::after {
    transform: scale(0.8);
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;

  li {
    margin-top: 20px;

    a {
      color: #333;
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #e91e63;
      }
    }
  }
}
}

</style>

