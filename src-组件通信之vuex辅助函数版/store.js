// vuex的核心管理对象模块
import Vue from 'vue'
import Vuex from 'vuex'

// 全局注册vuex，交由vuex进行集中式管理的共享状态(data)，所有组件都可以访问使用
Vue.use(Vuex)

// 对于复杂的应用，这4个对象(state、mutations、actions、getters)都会写在一个单独的js文件中，相互隔离
const state = {
  // 将之前写在App.vue文件data中的数据，现在交给state统一管理
  comments: [ // 这些初始化数据，又叫初始化状态
    {
      name: 'Boblzp',
      content: 'Vue好'
    },
    {
      name: 'Tom',
      content: 'Vue不错'
    },
    {
      name: 'Jack',
      content: 'Vue有点难'
    }
  ]
}

const mutations = {
  // 一个函数就是一个mutation
  // 与actions内的函数一一对应
  ADDCOMMENT (state, { comment }) {
    state.comments.unshift(comment)
  },
  DELCOMMENT (state, { ind }) {
    state.comments.splice(ind, 1)
  }
}

const actions = {
  // 一个函数就是一个action
  // 添加评论
  addComment ({ commit }, comment) {
    commit('ADDCOMMENT', { comment })
  },
  // 删除评论
  delComment ({ commit }, ind) {
    commit('DELCOMMENT', { ind })
  }
}

const getters = {
  // fn1 (state) {
  //   return state.属性名
  // }
  // 将之前写在App.vue文件中的计算属性getter函数写在这里，写在这里都有一个共同特点，就是需要用到state对象的数据
  // App.vue中想调用该计算属性获取数据时，使用this.$store.getters.fn1即可（注意fn1后不加小括号），也可以通过辅助函数...mapGetters(['fn1'])
}

export default new Vuex.Store({
  // mutations、actions、getters都是函数对象，内部的函数用来操作state对象
  state, // 状态对象
  mutations, // 直接更新state
  actions, // 触发mutations来更新state
  getters // 读取state数据
})
