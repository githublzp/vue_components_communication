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
      <Add />
      <List />
    </div>
  </div>
  <!--
组件间通信之vuex(需要安装vuex库 npm i vuex -D)
多组件间共享状态(data)的问题:
1) 多个视图依赖于同一状态
2) 来自不同视图的行为需要变更同一状态
3) 以前的解决办法(适用于小规模应用)
  a. 将数据以及操作数据的行为都定义在父组件
  b. 将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)
4) 现在的解决办法(适用于复杂的应用)
  vuex
  使用vuex和使用其它方法相比，需要新编辑的一些文件：新建store.js  编辑main.js

  哪里需要数据，就在哪里取数据
  哪里需要操作数据，就在哪里操作
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
    return {}
  },
  created () { },
  // mounted () {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="" scoped>
</style>
