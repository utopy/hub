<template>
    <div class="sidebar">
        <ul>
            <router-link to="/"><li :class="{active: $route.path=='/'}"> Home</li></router-link> 
            <router-link to="/chat"><li :class="{active: $route.path=='/chat'}">Chat</li></router-link> 
            <li>lorem</li>
            <li>ipsum</li>
        </ul>

        <ul>
            <router-link v-for="module in modules" v-bind:to="'/plugin/'+module"><a><li>{{module}}</li></a></router-link>
        </ul>

    </div>
</template>
<script>
  import storage from 'electron-storage'


    export default{
        data(){
            return{
                isActive: true,
                modules: []
            }
        },
        computed: {

        },
        mounted(){
            storage.get("modules/modules.json", (err, data) =>{
                if(err){
                    console.log(err)
                }
                for(let i = 0; i < data.moduleList.length; i++){
                    this.modules.push(data.moduleList[i])
                }
            })
        }
    }
</script>
<style>

  .sidebar{
      height: calc(100vh - 20px);
      background-color: #EDEFF0;
      padding-top: 20px;
      width: 200px;
  }
</style>
<style scoped>
    ul{
        text-align: left;
        font-weight: 200;
        list-style: none;
    }

    ul li{
        margin: 20px;
        padding: 5px;
        text-decoration: none;
        font-size: 14px;
        color: black;

    }

    ul a{
        color: black;
        text-decoration: none
    }

    .active{
        background-color: #51F5A0;
        border-radius: 5px; 
        color: white;

    }

    .sidebar-bottom{
        width: 100%;
        height: 25px;
        bottom: 0;
        position: absolute;
        background: red;
    }
</style>