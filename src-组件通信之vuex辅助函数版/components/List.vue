<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(item, index) in comments" :key="index">
        <!-- 定义插槽 -->
        <!-- 此写法过时 -->
        <!-- <div class="handle" slot="del">
          <a href="javascript:;" @click="del(index)">删除</a>
        </div>
        <p class="user" slot="user">
          <span>{{item.name}}</span>
          <span>说:</span>
        </p>
        <p class="centence" slot="content">{{item.content}}</p>-->
        <!-- 新写法 -->
        <template v-slot:del>
          <div class="handle">
            <a href="javascript:;" @click="delComment(index)">删除</a>
          </div>
        </template>
        <template v-slot:user>
          <p class="user">
            <span>{{item.name}}</span>
            <span>说:</span>
          </p>
        </template>
        <template v-slot:content>
          <p class="centence">{{item.content}}</p>
        </template>
      </Item>
    </ul>
  </div>
</template>

<script>
// 1. 引入
import { mapState, mapActions } from 'vuex'

import Item from './Item'

export default {
  name: '',
  components: {
    Item
  },
  data () {
    return {}
  },
  created () { },
  // mounted () {},
  computed: {
    // 写法1
    // comments () {
    //   return this.$store.state.comments
    // }
    // 写法2(这种写法用于计算属性比较多的情况，可简化书写)
    // ...作用于一个对象时，将该对象里的内容全掏出来，放到当前对象中
    // 2. 使用，获取state对象的comments，模板区可直接使用comments
    ...mapState(['comments'])
  },
  watch: {},
  methods: {
    // 删除评论
    // 写法1
    // delComment (ind) {
    //   this.$store.dispatch('delComment', ind)
    // }
    // 写法2
    // 2. 使用，将方法名以字符串形式写入数组中
    ...mapActions(['delComment'])
  }
}
</script>

<style lang="less" scoped>
.reply {
  margin-top: 0px;
}
</style>
