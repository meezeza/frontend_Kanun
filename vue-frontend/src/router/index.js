import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';     
import AboutPage from '../views/AboutPage.vue'; 
import NotFound from '../views/NotFound.vue'; 
import ProductDetaials from '../views/ProductDetaials.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage},
  { path: '/product', component: ProductPage},
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetaials,
    props: true
  },
  {
    path: '/:catchAll(.*)', //ถ้าไม่ตีรงกับพาทด้านบน
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(), // ใช้ History Mode
  routes // กำหนด routes ที่เราสร้างไว้
});

export default router; // ส่งออก router เพื่อนำไปใช้ใน main.js