import { createRouter, createWebHistory } from "vue-router"
import Test from "../Test.vue"
import MainPage from "../views/MainPage.vue"

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/test',
    component: Test
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})