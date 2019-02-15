<template>
  <div class="wrapper">
    <!-- <image :src="logo" class="logo" />
    <text class="greeting">The environment is ready!</text>
    <div class="box1">
      <text>12</text>
    </div>
    <div class="box2">
      <div class="box3"></div>
      <div class="box4"></div>
    </div>
    <router-view/>
    <a href="../dist/index-web.js">
      <text>text</text>
    </a> -->
    <web class="web" ref="myweb" :src="src" @pagestart="start" @pagefinish="finish" @error="error"></web>
    <div class="page-wrap">
      <div class="previous" @click="previous">
        <text>上一页</text>
      </div>
      <div class="refresh" @click="refresh">
        <text>刷新</text>
      </div>
      <div class="next" @click="next">
        <text>下一页</text>
      </div>
    </div>
  </div>
</template>

<script>
const webview = weex.requireModule('webview')
export default {
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      src: 'http://haiduomi.com'
    }
  },
  methods: {
    previous () {
      webview.goBack(this.$refs.myweb)
    },
    refresh () {
      webview.reload(this.$refs.myweb)
    },
    next () {
      webview.goForward(this.$refs.myweb)
    },
    init () {
      this.previous()
      this.refresh()
      this.next()
    },
    start () {
      console.log('start')
    },
    finish () {
      console.log('finish')
    },
    error () {
      console.log('error')
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
  .box1 {
    height: 200px;
    width: 200px;
    background-color: #ff0000;
    /* border: 10px solid #000; */
    border-width: 10px;
    border-style: solid;
    border-color: #000;
    position: relative;
    z-index: 100;
    background-image: linear-gradient(to top, black, white);
    border-radius: 50px;
  }
  .box2 {
    height: 200px;
    width: 200px;
    background-color: yellow;
    border: 10px solid #000;
    position: relative;
    z-index: 30;
    bottom: 10px;
    flex-direction: row;
  }
  .box3 {
    width: 100px;
    height: 200px;
    background-color: pink;
  }
  .box4 {
    width: 100px;
    height: 200px;
    background-color: blue;
  }
  .web {
    width: 750px;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    height: 500px;
  }
  .page-wrap {
    width: 750px;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
