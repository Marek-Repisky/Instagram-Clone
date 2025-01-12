import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookmarksView from "@/views/BookmarksView.vue";
import LikesView from "@/views/LikesView.vue";
import AccountView from "@/views/AccountView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bookmarks/',
      name: 'bookmarks',
      component: BookmarksView,
    },
    {
      path: '/likes/',
      name: 'likes',
      component: LikesView,
    },
    {
      path: '/account/:username',
      name: 'account',
      component: AccountView,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
})

export default router
