const { contextBridge, ipcRenderer, shell, process } = require('electron');
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
    invoke(channel, value) {
      return new Promise((reslove) => {
        ipcRenderer.invoke(channel, value).then((result) => {
          reslove(result);
        });
      });
    },
    send(channel, value) {
      ipcRenderer.send(channel, value);
    },
  },
});