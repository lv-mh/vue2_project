<template>
  <div id="content">
    <!-- <h2>{{msg}}</h2> -->
    <p v-html = "msg"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    };
  },
  mounted () {
    console.info(this);
    this.msg = this.$route.params.aid;
    var aid = this.$route.params.aid;
    this.reqData(aid);
    // console.info(this.$route.params)
  },
  methods: {
    reqData (aid) {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid;
      this.$http.get(api).then(function (response) {
        console.info(this);
        this.msg = response.body.result[0].content;
        console.info(response);
      }, function (err) {
        console.info(err);
      });
    }
  },
};
</script>
