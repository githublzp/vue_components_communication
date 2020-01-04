<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(item, index) in $store.state.comments" :key="index">
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
  computed: {},
  watch: {},
  methods: {
    // 删除
    delComment (ind) {
      this.$store.dispatch('delComment', ind)
    }
  }
}
</script>

<style lang="less" scoped>
.reply {
  margin-top: 0px;
}
</style>
