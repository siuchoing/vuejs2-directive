import Vue from 'vue'
import App from './App.vue'

// create a global v-directive called highlight, use by v-highlight to an element.
Vue.directive('highlight', {
  bind(el, binding, vnode) {  // one directive is attached
    //el.style.backgroundColor = 'green';
    el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
