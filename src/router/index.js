import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "@/modules/auth/Auth.vue";
import Profile from "@/modules/user/Profile.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: Profile,
    meta: {
      role: 'user'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  if(authRequired && !loggedIn) {
    return next('/')
  }
  next()
})


export default router
