<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name" />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: '',
  props: { // 声明了属性名、属性值类型、是否必填
    addComment: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  created () { },
  // mounted () {},
  computed: {},
  watch: {},
  methods: {
    add () {
      const name = this.name.trim()
      const content = this.content.trim()
      const comment = { name, content }
      // 父组件传递过来的数据在props中声明后，通过this引用
      this.addComment(comment)
    }
  }
}
</script>

<style lang="" scoped>
</style>
