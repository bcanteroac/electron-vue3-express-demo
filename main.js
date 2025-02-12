const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
      })

    win.webContents.loadURL('http://localhost:8080/ ');
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);