<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- 方式1 给Add组件对象绑定addComment事件监听 -->
      <!-- <Add @addComment="addComment" /> -->
      <!-- 方式2 通过$on，指定ref，方便获取Add组件对象 -->
      <Add ref="Add" />
      <List :comments="comments" :delComment="delComment" />
    </div>
  </div>
  <!--
组件间通信之自定义事件
数据是单个组件使用，数据就定义在该组件内，如果是多个组件都要用，就定义在它们共同的父级组件内
注意:
1) 只能子组件向父组件发送数据
2) 弊端: 隔代组件或兄弟组件间通信，此种方式不合适
3) 此方式只能用来在父子组件间通信事件
  -->
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  name: '',
  components: {
    Add,
    List
  },
  data () {
    return {
      // 1.定义数据（因为多个组件都使用该数据，所以定义在这些组件的父级组件中）
      comments: [
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
  },
  created () { },
  mounted () {
    // 页面渲染好之后，给Add组件对象绑定addComment事件监听
    // $on(监听的事件名, 对应的事件回调函数)
    this.$refs.Add.$on('addComment', this.addComment)
  },
  computed: {},
  watch: {},
  methods: {
    // 2.数据在哪，操作数据的方法也定义在哪
    // 添加
    addComment (comment) {
      this.comments.unshift(comment)
    },
    // 删除
    delComment (ind) {
      this.comments.splice(ind, 1)
    }
  }
}
</script>

<style lang="" scoped>
</style>
