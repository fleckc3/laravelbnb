/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";

window.Vue = require('vue');
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
    components: {
        index: Index,
    }
});
