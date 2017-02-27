'use strict'

import {
  app,
  BrowserWindow
} from 'electron'

const scandir = require('scandirectory')
const fs = require('fs')
const path = require('path');
const storage = require('electron-storage');
const userDataPath = app.getPath('userData');
const moduleFolder = userDataPath + "/modules"


if (!fs.existsSync(moduleFolder)){
    fs.mkdirSync(moduleFolder);
}

scandir(moduleFolder, {},function(err, list, tree){
  if(!err){
    storage.get('modules/modules.json', (err, data) =>{
      if(err){
        storage.set('modules/modules.json', {moduleList: []}, (err) =>{
          console.log(err)
          return
        })
      }
      let d = data || {};
      d.moduleList = [];
      for(let i = 0; i < Object.keys(list).length; i++){
        console.log(i)
        let obj = Object.keys(list)[i];
        if (list[obj] === "dir"){
          console.log(obj)
          d.moduleList.push(obj)
        }
      }
      console.log(d.moduleList)
      console.log(d)
      storage.set("modules/modules.json", d, (err)=>{
        if(err){console.log(err)}
      })
    })
  }
})

console.log(userDataPath)
storage.get('userdata', (err, data) => {
  if (err) {
    storage.set('userdata', {created:Date.now(), data:{todos:[]}}, (err) => {
      if (err) {
        console.error(err)
        return
      }
      console.log("creatooo")
      
    });
  } else {
    console.log(data);
  }
});



let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:${require('../../../config').port}` :
  `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    titleBarStyle: 'hidden'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})