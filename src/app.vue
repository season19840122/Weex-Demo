<template>
  <div class="wrapper">
    <div class="header">
      <text class="caption">{{ caption }}</text>
    </div>
    <router-view class="template"/>
    <div class="nav">
      <text @click="jump('index')" :class="selectPath === 'index'? 'selected': 'normal'">主页</text>
      <text @click="jump('car')" :class="selectPath === 'car'? 'selected': 'normal'">购物车</text>
      <text @click="jump('me')" :class="selectPath === 'me'? 'selected': 'normal'">我的</text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      caption: '今日上新',
      selectPath: 'index'
    }
  },
  methods: {
    jump (path) {
      if (path === 'index') {
        this.caption = '今日上新'
      } else if (path === 'car') {
        this.caption = '购物车'
      } else if (path === 'me') {
        this.caption = '我的'
      }
      this.selectPath = path
      this.$router.push(path)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 750px;
  }
  .header {
    width: 750px;
    height: 68px;
    line-height: 68px;
    border-bottom-width: 1px;
    border-bottom-color: #000;
    .caption {
      text-align: center;
    }
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 750px;
    height: 80px;
    .normal {
      width: 250px;
      height: 88px;
      line-height: 88px;
      color: #000;
      text-align: center;
      font-size: 40px;
    }
    .selected {
      width: 250px;
      height: 88px;
      line-height: 88px;
      font-size: 40px;
      text-align: center;
      color: yellowgreen;
    }
  }
</style>
