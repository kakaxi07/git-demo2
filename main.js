const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');

const TARGET_URL = 'http://localhost:4000/';

function createWindow() {
  const iconPath = path.join(__dirname, 'assets', 'x-logo.svg');
  const icon = nativeImage.createFromPath(iconPath);

  const win = new BrowserWindow({
    width: 1366,
    height: 820,
    icon: icon.isEmpty() ? undefined : icon,
    title: 'X Client',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadURL(TARGET_URL);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
