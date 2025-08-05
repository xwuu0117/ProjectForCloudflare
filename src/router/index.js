import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import AuthorsJson from '@/assets/json/authors.json'

const routes = [
  {    path: '/',    name: 'Home',    component: HomeView  },
  {    path: '/about',    name: 'About',    component: AboutView  },
  {    path: '/Register',    name: 'Register',    component: RegisterView  },
  {    path: '/Login',    name: 'Login',    component: LoginView  },
  {    path: '/FireLogin',    name: 'FireLogin',    component: FirebaseSigninView  },
  {    path: '/FireRegister',    name: 'FireRegister',    component: FirebaseRegisterView  },
  {    path: '/Weather',    name: 'Weather',    component: WeatherView  },
  {    path: '/CountBookAPI',    name: 'CountBookAPI',    component: CountBookAPI  },
  {    path: '/AuthorsJson',    name: 'AuthorsJson',    component: AuthorsJson  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router