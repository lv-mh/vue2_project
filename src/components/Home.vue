<template>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"/>
        <mt-cell title="Alden"/>
        <mt-cell title="Austin"/>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"/>
        <mt-cell title="Braden"/>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"/>
        <mt-cell title="Zane"/>
      </mt-index-section>
    </mt-index-list>
    <el-button 
      size="mini" 
      @click="gonews">跳转新闻</el-button>
    <hr><br>
    <h1>{{ msg }}</h1>
    <el-button 
      size="mini" 
      @click="run">run</el-button>
    <hr><br>
    <v-life v-if="flag"/>
    <el-button 
      size="mini" 
      @click="flag=!flag">销毁组件</el-button>
    <br><br><br><hr>
    <el-button 
      size="mini" 
      @click="getData">请求数据</el-button>
    <br><br><br><hr>
    <ol>
      <li 
        v-for="(val,key) in list2" 
        :key="key">{{ val.title }}</li>
    </ol>
    <br><br><br><hr>
    <v-header 
      ref="header" 
      @click="getCData"/>
    <el-button 
      size="mini" 
      @click="getCData">请求数据</el-button>
  </div>
</template>
<script>

import Header from './Header';
import Life from './Life';
import Axios from 'axios';
export default {
  name: 'Home',
  components: {
    'v-header': Header,
    'v-life': Life
  },
  props: {
    messageList: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  },
  data () {
    return {
      msg: '我是vue',
      title: '首页',
      flag: true,
      list2: []
    };
  },
  mounted () {
    console.log(this.$parent.m);
    this.getData();
  },
  methods: {
    gonews () {
      this.$router.push({path: 'news'});
    },
    run () {
      alert('run');
    },
    getCData () {
      console.log(this.$refs.header.msg);
    },
    getName () {

    },
    getData () {
      const that = this;
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      // this.$http.get(api).then(response => {
      //   console.log(response)
      //   this.list2 = response.body.result
      // }, response => {

      // })
      Axios.get(api)
        .then(function (response) {
        // handle success
          console.log(response);
          console.log(that);
          that.list2 = response.data.result;
        })
        .catch(function (error) {
        // handle error
          console.log(error);
        })
        .finally(function () {
        // always executed
        });
    }
  },
};
</script>
<style scoped>
 h2{
   color: red
 }
 button{
   float: left;
}
.el-button--warning {
  color: #fff;
  background-color: #FC813B;
  border-color: #FC813B;
}
li{
  text-align: left
}
</style>
