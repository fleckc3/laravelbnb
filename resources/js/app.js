/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import moment from "moment";
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";

import StarRating from "./shared/components/StarRating";

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);

const app = new Vue({
    el: '#app',
    router,
    components: {
        index: Index,
    }
});
