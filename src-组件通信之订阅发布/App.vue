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
      <List :comments="comments" :delComment="delComment" />
    </div>
  </div>
  <!--
组件间通信之消息订阅与发布(需要借助一个库npm i pubsub-js -D)
数据是单个组件使用，数据就定义在该组件内，如果是多个组件都要用，就定义在它们共同的父级组件内

绑定事件监听  ==》订阅
触发事件  ==》发布

注意:
1) 此方式可实现任意关系组件间通信(数据)
  -->
</template>

<script>
// 1. 引入pubsub-js库
import PubSub from 'pubsub-js'

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
    // 2.订阅消息
    // subscribe函数参数
    //  参数1：消息名  参数2：成功收到发布消息后触发该回调函数
    // 回调函数参数
    //  msg：发布过来的消息内容  comment：发布过来的数据
    PubSub.subscribe('addComment', (msg, comment) => {
      this.addComment(comment)
    })
  },
  computed: {},
  watch: {},
  methods: {
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
