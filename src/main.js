import Vue from 'vue';

import App from './App.vue';

import VueYoutubeEmbed from 'vue-youtube-embed'
Vue.use(VueYoutubeEmbed)


new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})