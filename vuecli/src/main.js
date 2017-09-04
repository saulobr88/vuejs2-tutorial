import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

// Use vue packages
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Custom directives
Vue.directive('theme', {
    bind(el, binding, vnode){
        if (binding.value == 'wide'){
            el.style.maxWidth = "1260px";
        } else if (binding.value = 'narrow'){
            el.style.maxWidth = "560px";
        }
        if(binding.arg == 'column'){
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});

// Filters
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase();
});

// The vue Instance
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
