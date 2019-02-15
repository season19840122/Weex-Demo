<template>
  <div class="wrapper">
    <list class="list" pagingEnabled="true" offset-accuracy="30">
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
        <text class="text">刷新 ...</text>
      </refresh>
      <header class="header">
        <text class="text">标题</text>
      </header>
      <cell class="cell" v-for="i in lists" :key="i">
        <div class="panel">
          <text class="text">{{ i }}</text>
        </div>
      </cell>
      <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
        <text class="text">加载更多 ...</text>
      </loading>
    </list>
  </div>
</template>

<script>
const MOREDATA = 4
export default {
  name: 'App',
  data () {
    return {
      lists: [1, 2, 3, 4, 5, 6],
      refreshing: false,
      loadinging: 1
    }
  },
  methods: {
    onrefresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 2000)
    },
    onloading () {
      console.log('loadinging')
      this.loadinging = true
      setTimeout(() => {
        this.loadinging = false
        const length = this.lists.length
        for (let i = length; i < length + MOREDATA; i++) {
          this.lists.push(i + 1)
        }
      }, 2000)
    }
  },
  mounted () {
    // this.init()
  }
}
</script>

<style scoped>
  .header {
    text-align: center;
    color:#000;
    background-color: #fff;
    font-size: 50px;
  }
  .list {
    position: relative;
    width: 750px;
    height: 1230px;
  }
  .panel {
    width: 750px;
    height: 250px;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    background-color: green;
    background-color: yellow;
    margin-bottom: 20px;
  }
  .text {
    text-align: center;
  }
  .loading {
    position: absolute;
    bottom: 0;
    width: 750px;
    height: 200px;
    display: flex;
    align-items: center;
  }
</style>
