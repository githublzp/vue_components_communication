<template>
  <li class="list-group-item">
    <!-- 使用插槽 -->
    <slot name="del"></slot>
    <slot name="user"></slot>
    <slot name="content"></slot>
  </li>
</template>

<script>
export default {
  name: '',
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
li {
  transition: 0.5s;
  overflow: hidden;
}
.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
