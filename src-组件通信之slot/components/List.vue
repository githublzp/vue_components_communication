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
            <a href="javascript:;" @click="del(index)">删除</a>
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
import Item from './Item'

export default {
  name: '',
  // 子组件要声明接收的属性
  props: ['comments', 'delComment'], // 只声明了属性名comments
  components: {
    Item
  },
  data () {
    return {}
  },
  created () { },
  // mounted () {},
  computed: {},
  watch: {},
  methods: {
    // 删除comment
    del (ind) {
      this.delComment(ind)
    }
  }
}
</script>

<style lang="less" scoped>
.reply {
  margin-top: 0px;
}
</style>
