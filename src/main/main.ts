import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1055,
    height: 600,
    center: true,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  mainWindow.loadURL("http://localhost:3000/");

  mainWindow.once("ready-to-show", () => mainWindow.show());
});

app.on("window-all-closed", () => app.quit());