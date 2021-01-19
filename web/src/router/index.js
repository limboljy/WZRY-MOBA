import VueRouter from 'vue-router'
import Vue from 'vue'
const Main = () => import('../views/Main')
const Home = () => import('../views/Home')

Vue.use(VueRouter)

const routes = [
  { path:'/', name: 'Main', component: Main ,
  children:[
    {path:'home', name:'Home' ,component:Home},
  ]  
}
]

const router = new VueRouter({
  routes
})

export default router

