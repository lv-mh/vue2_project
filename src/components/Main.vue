<template>
  <div id="main">
    <span>{{ $route.params.id }}</span>
    <ul>
      <li 
        v-for="(item,key) in list" 
        :key="key" 
        :class="{'red':key==0,'blue':key==1}">{{ item }}</li>
    </ul>
    <!-- <br>
       <div class="box" :style="{'width':boxwidth+'px'}">
       </div>
       <br>
       <input v-model="flag" type="text"/>
       <button v-on:click="getmsg()">获取表单数据</button>
       <hr>
       <br>
        <input v-model="flag" ref="usrinfo"/>
        <hr>
       <br>
       <button @click="run1">first</button> -->
    <!-- <button @click="run2">second</button> -->
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      list: [111, 222, 333],
      flag: true,
      boxwidth: 300
    };
  },
  mounted () {
    console.info('1');
    console.info(this.$route.params.id);
  },
  methods: {
    run1: function () {
      alert(1);
    },
    getmsg: function () {
      alert(this.flag);
    }
  },
};
</script>
<style>
#main{text-align: left}
.todo{text-align: left;background: rgb(216, 16, 50)}
.red{
  color: red
}
.blue{
  color: blue
}
.box{
  height: 100px;
  background: hotpink
}
</style>
