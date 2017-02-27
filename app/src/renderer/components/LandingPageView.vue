<template>
  <div class="homeView">
    <div>
      {{url}}
      <input type="text" v-on:keyup.enter="createMoney" v-model="input">
    </div>
    <el-steps :space="100" direction="vertical" :active="1">
      <el-step description="lorem ipsum" v-for="element in elements.data.todos"  v-bind:title="element"></el-step>
    </el-steps>
  </div>
</template>
<script>
  import storage from 'electron-storage'
  import electron from 'electron'
  console.log(electron.remote)
  console.log(electron.remote.app.getAppPath('userData'))
  export default{
    name: "home",
    mounted(){
      storage.get('userData', (err, data)=>{
        if(err){
          console.log(err)
        }
        this.elements = data;
        console.log(data)
      })
    },
    data(){
      return{
        elements: {data:{todos:[]}},
        input: null,
        temp: null,
        url: electron.remote.app.getAppPath('userData')
      }
    },
    methods: {
      createMoney: function(){
        storage.get('userData', (err,data)=>{
          if(err){
            console.log(err)
          } else {
            console.log(data)
            let d = data
            d.data.todos.unshift(this.input);
            storage.set('userData', d, (err)=>{
              console.log(err)
            })
            this.elements = d;
            this.input = null;

          }
        })
        /*storage.set('userData', {"blabla": this.input}, (err)=>{
          if(err){console.log(err)}
        })*/

      }
    }
  }
</script>
<style>
  .homeView{
    margin-left: 20px;
    padding-top: 20px;
  }
</style>