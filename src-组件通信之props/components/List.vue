<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item
        v-for="(item, index) in comments"
        :key="index"
        :index="index"
        :comment="item"
        :delComment="delComment"
      />
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
  methods: {}
}
</script>

<style lang="less" scoped>
.reply {
  margin-top: 0px;
}
</style>
