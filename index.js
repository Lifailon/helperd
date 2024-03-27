const {app, BrowserWindow, Menu} = require('electron')
let mainWindow
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        title: 'Helper',
        backgroundColor: '#333333',
        fullscreen: false,
        resizable: true,
        frame: true
    })
    const menuButtons = [{
        label: 'File',
        submenu: [
            {
                label: 'GitHub',
                click: () => {
                    mainWindow.loadURL('https://github.com/Lifailon')
                }
            },
            { type: 'separator' },
            {
                label: 'Exit',
                click: () => { app.quit() }
            }
        ]
    }]
    const menu = Menu.buildFromTemplate(menuButtons)
    Menu.setApplicationMenu(menu)
    mainWindow.loadFile('main.html')
})
