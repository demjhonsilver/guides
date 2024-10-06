import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Html from '../components/html/Html.vue';

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
        path: 'html', // Add Html route here
        component: Html 
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(), // No base URL needed
  routes,
});

export default router;
