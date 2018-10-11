import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';

import Galleries from './Galleries.vue'
import Gallery from './Gallery.vue'
import GalleryObject from './GalleryObject.vue'

Vue.use(VueRouter)



const routes = [
    {
        path: '/', component: Galleries
    },
    {
        path: '/gallery/:gallery_id',
        component: Gallery
    },
    {
        path: '/object/:object_id',
        component: GalleryObject
    }
];

const router = new VueRouter({routes})
new Vue({
    el: '#app',
    render: h => h(App),
    router
});
