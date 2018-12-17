import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '@/components/index/index.vue';//首页

Vue.use(VueRouter);
var userMsg = window.sessionStorage.getItem("userMsg");
if(!userMsg){
    window.location.hash = "/index";
}
export default new VueRouter({
  routes: [
            {
            path: '/',
            redirect: '/index'
            },
            { path: '/index', component: index }//首页
            
        ]
});
