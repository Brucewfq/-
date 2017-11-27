<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style>
  body {
    margin: 0;
    padding: 0;
    border: none;
    background-color: #222222;
    color: #ffffff;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    text-align: center;
  }
</style>

<script>
  import MHeader from './components/m-header/m-header'
  import Tab from './components/tab/tab'

  export default {
    name: 'app',
    components: {
      MHeader,
      Tab
    }
  }
</script>

