import VueRouter from 'vue-router'
import Vue from 'vue'
const Main = () => import('../views/Main')
const Login = () => import('../views/Login')
const CategoryEdit = () => import('../views/CategoryEdit')
const CategoryList = () => import('../views/CategoryList')
const ItemEdit = () => import('../views/ItemEdit')
const ItemList = () => import('../views/ItemList')
const HeroEdit = () => import('../views/HeroEdit')
const HeroList = () => import('../views/HeroList')
const ArticleEdit = () =>import('../views/ArticleEdit')
const ArticleList = () =>import('../views/ArticleList')
const AdEdit = () =>import('../views/AdEdit')
const AdList = () =>import('../views/AdList')
const AdminUserEdit = () =>import('../views/AdminUserEdit')
const AdminUserList = () =>import('../views/AdminUserList')

Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  // {
  //   path: '',
  //   redirect: '/'  //页面重定向
  // },
  { path:'/login', name:'login',component: Login ,meta: { isPublic: true } },
  { path: '/', name: 'Main', component: Main,
    children: [
      { path: 'categories/create',component: CategoryEdit },
      { path: 'categories/edit/:id',component: CategoryEdit, props: true },
      { path: 'categories/list', component: CategoryList },

      { path: 'items/create', component: ItemEdit },
      { path: 'items/edit/:id', component: ItemEdit, props: true },
      { path: 'items/list', component: ItemList },

      { path: 'heroes/create', component: HeroEdit },
      { path: 'heroes/edit/:id', component: HeroEdit, props: true },
      { path: 'heroes/list', component: HeroList },

      { path: 'articles/create', component: ArticleEdit },
      { path: 'articles/edit/:id', component: ArticleEdit, props: true },
      { path: 'articles/list', component: ArticleList },

      { path: 'ads/create', component: AdEdit },
      { path: 'ads/edit/:id', component: AdEdit, props: true },
      { path: 'ads/list', component: AdList },

      { path: 'admin_users/create', component: AdminUserEdit },
      { path: 'admin_users/edit/:id', component: AdminUserEdit, props: true },
      { path: 'admin_users/list', component: AdminUserList }
    ]
  }
]

const router = new VueRouter({
  routes
  // mode: 'history'
})

//添加登录页路由守卫
// router.beforeEach((to,from,next) =>{
//   // console.log(to.isPublic.meta)
//   if(!to.meta.isPublic){
//     return next('/login')
//   }
//   next()
// })

export default router
