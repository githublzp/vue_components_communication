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
          <button type="button" class="btn btn-default pull-right" @click="addComment(comment)">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// 1. 引入
import { mapActions } from 'vuex'
export default {
  name: '',
  data () {
    return {
      name: '',
      content: ''
    }
  },
  created () { },
  // mounted () {},
  computed: {
    // 对于表单中双向绑定的计算属性，建议还用“v-model + 局部状态”这种方式；如果使用mapGetters辅助函数，会十分麻烦
    comment () {
      const name = this.name.trim()
      const content = this.content.trim()
      const comment = { name, content }
      return comment
    }
  },
  watch: {},
  methods: {
    // 添加评论
    // 写法1
    // addComment () {
    //   const name = this.name.trim()
    //   const content = this.content.trim()
    //   const comment = { name, content }
    //   this.$store.dispatch('addComment', comment)
    // }
    // 写法2  方法携载的数据，要在模板区绑定方法时声明
    // 如果携载的数据需要合成转换，就在computed计算属性中操作
    // 2. 使用，将方法名以字符串形式写入数组
    ...mapActions(['addComment'])
  }
}
</script>

<style lang="" scoped>
</style>
