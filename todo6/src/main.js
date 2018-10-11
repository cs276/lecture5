import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';

import Galleries from './Galleries.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/galleries', component: Galleries}
];

const router = new VueRouter({routes})
new Vue({
    el: '#app',
    render: h => h(App),
    router
});
