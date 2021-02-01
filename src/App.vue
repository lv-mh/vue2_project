<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header class="header">
      <router-link to="/main" >go to main</router-link>
      <router-link to="/news" >go to news</router-link>
      <router-link to="/home" >go to HOME</router-link>
      <router-link to="/user" >go to user</router-link>

    </header>
    <router-view/>
    <!-- <v-home message="hello world" ref="ahome"></v-home>
    <br><hr>
    <v-news></v-news> -->
  </div>
</template>

<script>
import Home from './components/Home';
import News from './components/News';

export default {
  name: 'App',
  components: {
    'v-home': Home,
    'v-news': News
  },
  data () {
    return {
      m: 'abc'
    };
  },
  mounted () {
    let a = 'bcd';
    // console.info(this.$refs.ahome.title)
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}

.header{
  height: 4.4rem;
  background: #000;
  color: #fff;
  line-height: 4.4rem;
  text-align: center;
  a{
    color:#fff;
    padding:0 2rem;
  }
}
</style>
