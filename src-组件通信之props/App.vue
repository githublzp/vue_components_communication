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
      <Add :addComment="addComment" />
      <List :comments="comments" :delComment="delComment" />
    </div>
  </div>
  <!--
组件间通信之props
数据是单个组件使用，数据就定义在该组件内，如果是多个组件都要用，就定义在它们共同的父级组件内
注意
1) 此方式用于父组件向子组件传递数据
3) 接收数据的子组件要在export default{}中进行props声明
2) 所有标签属性都会成为组件对象的属性, 模板区可以直接引用，script区可以通过this引用
3) 弊端:
a. 如果需要向祖孙后代传递数据必须逐层传递
b. 兄弟组件间也不能直接 props 通信, 必须借助父组件才可以
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
  // mounted () {},
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
