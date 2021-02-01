<template>
  <div>
    <h2>這是新聞組件</h2>
    <ul>
      <li 
        v-for="(item,key) in list" 
        :key="key">
        <router-link :to="'/content/'+item.aid">{{ key }}-------{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
  data () {
    return {
      msg: 'news components',
      list: ['111', '222', '333']
    };
  },
  mounted () {
    this.requestData();
  },
  methods: {
    requestData () {
      var that = this;
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      // this.$http.get(api).then(function (response) {
      //   console.info(this)
      //   this.list = response.body.result
      //   console.info(response)
      // }, function (err) {
      //   console.info(err)
      // })
      Axios.get(api)
        .then(function (response) {
        // handle success
          console.log(response);
          console.log(this);
          console.log(that);
          that.list = response.data.result;
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
