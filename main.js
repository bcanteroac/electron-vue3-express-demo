const { app, BrowserWindow } = require('electron');

// const { items } = require('./items')
const db = require('./database')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  win.webContents.loadURL('http://localhost:8080/ ');

  win.webContents.on('did-finish-load', () => {
    // win.webContents.send('pr-items', items)
    db.item_all();
  })

  // win.webContents.openDevTools();

  db.create_db();

}

app.whenReady().then(createWindow);