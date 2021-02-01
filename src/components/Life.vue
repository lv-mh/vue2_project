<template>
  <div id="life">
    {{ msg }}
    <button @click="setmsg">改变msg</button>
  </div>

</template>
<script>
export default {
  data () {
    return {
      msg: 'life'
    };
  },
  beforeCreate () {
    console.info('实例刚刚被创建----1');
  },
  created () {
    console.info('实例创建完成----2');
  },
  beforeMount () {
    console.info('模板编译前---3');
  },
  mounted () {
    console.info('模板编译完成---4');
  },
  beforeUpdate () {
    console.info('数据更新之前---5');
  },
  updated () {
    console.info('数据更新完成---6');
  },
  beforeDestroy () {
    console.info('实例销毁之前---7');
  },
  destroyed () {
    console.info('实例销毁完成---8');
  },
  methods: {
    setmsg () {
      this.msg = 'a';
    }
  },

};
</script>
