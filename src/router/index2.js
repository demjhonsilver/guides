import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Html from '../components/html/Html.vue'; // First child component
import Html2_1 from '../components/html/Html2_1.vue'; // Second child component

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
            path: '2-1', // This will render at '/html/2-1'
            component: Html2_1,
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
