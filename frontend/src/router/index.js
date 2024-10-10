import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../layouts/Default.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/HomeView.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/pages/AuthView.vue'),
        },
      ],
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      component: () => import('../layouts/GeneralUser.vue'),
      children: [
        {
          path: ':userName',
          name: 'myprofile',
          component: () => import('@/pages/user/UserProfile.vue'),
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../layouts/Public.vue'),
      children: [
        {
          path: ':userName',
          name: 'userprofile',
          component: () => import('@/pages/user/PreviewUserProfile.vue'),
        },
      ],
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: () => import('../layouts/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'userlistviewinitial',
          component: () =>
            import('@/pages/dashboard/user/user_list/UserView.vue'),
        },
        {
          path: 'user/user_list',
          name: 'user_user_listuserlistview',
          component: () =>
            import('@/pages/dashboard/user/user_list/UserView.vue'),
        },
        {
          path: 'user/user_list/:id',
          name: 'user_user_listuserview',
          component: () =>
            import('@/pages/dashboard/user/user_list/EditUserView.vue'),
        },
        {
          path: 'user_links/user_link_list',
          name: 'user_links_user_link_listuserLinkslistview',
          component: () =>
            import(
              '@/pages/dashboard/user_links/user_link_list/UserLinksView.vue'
            ),
        },
        {
          path: 'user_links/user_link_list/:id',
          name: 'user_links_user_link_listuserLinksview',
          component: () =>
            import(
              '@/pages/dashboard/user_links/user_link_list/EditUserLinksView.vue'
            ),
        },
        {
          path: 'role/role_list',
          name: 'role_role_listrolelistview',
          component: () =>
            import('@/pages/dashboard/role/role_list/RoleView.vue'),
        },
        {
          path: 'role/role_list/:id',
          name: 'role_role_listroleview',
          component: () =>
            import('@/pages/dashboard/role/role_list/EditRoleView.vue'),
        },
      ],
    },
  ],
});
export default router;
