import Vue from 'vue'
import App from './App.vue'

// 1. 引入vuex的核心管理对象模块
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store // 2. 映射store，所有组件中都多了一个属性$store, 它是一个 store 对象，通过该对象就可以访问到vuex管理的状态
}).$mount('#app')
