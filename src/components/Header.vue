<template>
  <div>
    <h2>這是hearder組件</h2>
    <el-button size="mini" @click="getPData">请求P数据</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'msg111111'
    };
  },
  methods: {
    getPData () {
      alert(this.$parent.msg);
    }
  }
};
</script>
