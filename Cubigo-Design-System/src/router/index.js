import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OverviewView from "@/views/ButtonsView.vue";
import AvatarView from "@/views/AvatarView.vue";
import InputsView from "@/views/InputsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewView
    },
    {
      path: '/avatar',
      name: 'avatar',
      component: AvatarView
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: InputsView
    },
  ]
})

export default router
