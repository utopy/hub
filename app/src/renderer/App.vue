<template>
  <div id="#app">
          <sidebar style="float:left"></sidebar>
            <div class="content float-right">
            <router-view style="height: 100%; overflow-y: scroll"></router-view>
          </div>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  import storage from 'electron-storage'
  import sidebar from 'components/sidebar'
  export default {
    components: {sidebar},
    store,
    storage
  }
</script>

<style>
/*  
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
*/
  * {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  .float-left{
    float: left;
    display: inline-block;
  }

  .float-right{
    float: right
  }
  .content{
    width: calc(100vw - 200px);
    float: right;
    display: inline-block;
    height: calc(100vh - 20px)
  }

  html,
  body { height: 100%; }
</style>

