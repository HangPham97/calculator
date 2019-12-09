// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('calculator', require('./components/calculator.vue').default)
new Vue({
  el: '#app'
})
