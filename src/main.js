import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router';
import MoviesDb from './components/MoviesDb.vue'; 
import Home from './components/HomePage';
import CannotFind from './components/CannotFind';
import MovieDetail from './components/MovieDetail'; 

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: "/movies", component: MoviesDb},
    {path: '/', component: Home}, 
    {path: '/movies/:movieId', component:MovieDetail}, 
    {path: '*', component: CannotFind}
  ], 
  mode: "history"
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
