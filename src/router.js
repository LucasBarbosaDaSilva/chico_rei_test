import { createRouter, createWebHistory } from 'vue-router'
import Camisetas from './components/Camisetas.vue'
import Estampadas from './components/Estampadas.vue'
import ComBolso from './components/ComBolso.vue'





 const routes = [
    {
      path: '/',
      name: 'CamisetaBasica',
      component: Camisetas
    },
    {
      path: '/estampadas',
      name: 'CamisetaEstampada',
      component: Estampadas
    },
    {
      path: '/com-bolso',
      name: 'Com Bolso',
      component: ComBolso
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router;