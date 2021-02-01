<template>
  <div id="user">
    <div class="user">
      <div class="left" >
        <ul>
          <li>
            <router-link to="/user/helloworld" > 增加用户</router-link>
          </li>
          <li>
            用户列表
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: '我是一个user组件'
    };
  }
};
</script>
<style lang="scss" scoped>
.user{
  display: flex;
  .left{
    width:200px;
    min-height: 400px;
    border-right: 1px solid #eee;
    li{
      line-height: 2;
    }
  }
  .right{
    flex: 1;
  }
}
</style>
