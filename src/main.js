import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import zjl_http from './axios/http';
import iView from 'iview';
import locale from 'iview/dist/locale/zh-CN';
// import ElementUI from 'element-ui';
import './utils/less/global.less';
// import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';

Vue.prototype.$zjl_http = zjl_http;
Vue.config.productionTip = false;

Vue.use(iView,{locale});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
