  const path = '/Users/utopy/Library/Application Support/Electron/modules/';
  const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },{
    path: '/chat',
    name: 'chat',
    component: require('components/chat')
  },{
    path: '/plugin/:name',
    name: 'plugin',
    component: require('components/plugin')
  },
  {
    path: '*',
    redirect: '/'
  }
]
  import electron from 'electron';
  import seq from 'sequelize';
  import storage from 'electron-storage'
  storage.get("modules/modules.json", (err, data) =>{
    if(err){
      console.log(err)
    }
    let modules = data.moduleList;
    
    modules.forEach(function(module){
      let mm = path + module;
      console.log(mm)
      /*let m = {
        path: '/'+module,
        name: module,
        component: require(path + module)
      }
      routes.push(m)*/
    })
  })

  


export default routes
