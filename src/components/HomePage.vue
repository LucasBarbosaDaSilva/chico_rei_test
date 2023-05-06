<template>
  <NavBar />
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  name: 'HomePage',
  components: {
    NavBar,
  },
  data() {
    return {
      selectedRoute: '/',
      routes: [
        { name: 'Camisetas', path: '/' },
        { name: 'Estampadas', path: '/estampadas' },
        { name: 'Com Bolso', path: '/com-bolso' },
      ]
    }
  },
  methods: {
    updateSelectedRoute() {
  
      this.$router.push(this.selectedRoute);
    }
  },
  created() {
    
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style lang="less">

@font-family: 'Ysabeau', sans-serif;
@mobile: 768px;
@tablet: 768px;
@desktop: 992px;

.container-select {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  padding: 0;
}

.route-select {
  @media (max-width: @mobile) {
    font-family: @font-family;
      font-size: 20px;
      font-weight: 600;
    padding: 7px;
    width: 190px;
    align-items: center;
    margin-top: 4vh;
    margin-bottom: 5vh;
    border: 2px solid #101010;
    border-radius: 0.25rem;
    color: #333;
    background-color: #fff;
    outline: none;
    &:focus {
      border-color: #000000;
    }
  }

  @media (min-width: @tablet) {
    font-family: @font-family;
      font-size: 22px;
      font-weight: 600;
    padding: 8px;
    width: 210px;
    align-items: center;
    margin-top: 4vh;
    margin-bottom: 5vh;
    border: 2px solid #101010;
    border-radius: 0.25rem;
    color: #333;
    background-color: #fff;
    outline: none;
    &:focus {
      border-color: #000000;
    }
  }
    @media (min-width: @desktop) {
      font-family: @font-family;
      font-size: 22px;
      font-weight: 600;
    padding: 8px;
    width: 210px;
    align-items: center;
    margin-top: 4vh;
    margin-bottom: 5vh;
    border: 2px solid #101010;
    border-radius: 0.25rem;
    color: #333;
    background-color: #fff;
    outline: none;
    &:focus {
      border-color: #000000;
    }
  }
  }
</style>