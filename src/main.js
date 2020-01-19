import Vue from 'vue'
import App from './App.vue'

// create a global v-directive called highlight, use by v-highlight to an element.
Vue.directive('highlight', {
  bind(el, binding, vnode) {  // one directive is attached
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value; // default bg color
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
