import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Html from '../components/html/Html.vue'; // First child component
import Html2_1 from '../components/html/Html2_1.vue'; // Second child component
import Html2_2 from '../components/html/Html2_2.vue';
import Html2_3 from '../components/html/Html2_3.vue';
import Html2_4 from '../components/html/Html2_4.vue';




const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home }, // Default child route
      { 
        path: 'about', 
        component: About 
      },
      { 
        path: 'html', // Parent Html route
        children: [
          {
            path: '', // Redirect from '/html' to '/html/1'
            component: Html,
          },

          {
            path: 'page/2-1', // This will render at '/html/2-1'
            component: Html2_1,
          },
          {
            path: 'page/2-2', // This will render at '/html/2-1'
            component: Html2_2,
          },

          {
            path: 'page/2-3', 
            component: Html2_3,
          },
          {
            path: 'page/2-4', 
            component: Html2_4,
          },
          {
            path: 'page/3',
            component: () => import('../components/html/Html3.vue')
          },
          
          {
            path: 'page/4',
            component: () => import('../components/html/Html4.vue')
          },

          {
            path: 'page/5',
            component: () => import('../components/html/Html5.vue')
          },


          {
            path: 'page/6',
            component: () => import('../components/html/Html6.vue')
          },

          {
            path: 'page/7',
            component: () => import('../components/html/Html7.vue')
          },

          {
            path: 'page/8',
            component: () => import('../components/html/Html8.vue')
          },

          {
            path: 'page/9',
            component: () => import('../components/html/Html9.vue')
          },

          {
            path: 'page/10',
            component: () => import('../components/html/Html10.vue')
          },

          {
            path: 'page/11',
            component: () => import('../components/html/Html11.vue')
          },


        ]
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
