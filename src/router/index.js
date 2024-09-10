import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import OtherStuff from "@/views/OtherStuff.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/other-stuff/',
      name: 'other-stuff',
      component: OtherStuff
    },
  ]
})

export default router
