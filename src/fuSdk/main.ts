import auth_pack from '../../assets/cnama/authpack.json';
import { Beauty } from './sdk';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import { ipcMain, shell, app } from 'electron';
import {
  changeResolutionOfVirturalCamera,
  createVirturalCamera,
  pushDataToVirturalCamera,
  registeVirturalCamera,
  CameraType,
} from '@faceunity/virtualcamera';
// import { app } from 'electron/main';
const { Setup, Render, SetLogLevel, FULOGLEVEL } = require('@faceunity/cnama');

export class FuSdkFactory {
  beauty: Beauty;
  canvasSize: { width: number; height: number };
  setup: Promise<any>;
  isMac: boolean;
  flag: boolean;
  constructor() {
    this.flag = false;
    ////////////
    this.isMac = process.platform == 'darwin';
    if (!this.isMac) {
      registeVirturalCamera();
    }
    Setup(Buffer.from(auth_pack));
    this.canvasSize = {
      width: 1020,
      height: 720,
    };
    if (!this.isMac) {
      let bundle1 = `${
          process.env.NODE_ENV === 'production' ? 'resources/' : ''
        }assets/cnama/face_beautification.bundle`,
        bundle2 = `${
          process.env.NODE_ENV === 'production' ? 'resources/' : ''
        }assets/cnama/ai_face_processor_pc.bundle`;
      this.beauty = new Beauty(
        readFileSync(join(process.cwd(), bundle1)),
        readFileSync(join(process.cwd(), bundle2))
      );
    } else {
      let bundle1 = `${
          process.env.NODE_ENV === 'production' ? '../' : ''
        }assets/cnama/face_beautification.bundle`,
        bundle2 = `${
          process.env.NODE_ENV === 'production' ? '../' : ''
        }assets/cnama/ai_face_processor_pc.bundle`;

      if (process.env.NODE_ENV === 'production') {
        this.beauty = new Beauty(
          readFileSync(join(app.getAppPath(), bundle1)),
          readFileSync(join(app.getAppPath(), bundle2))
        );
      } else {
        this.beauty = new Beauty(
          readFileSync(join(process.cwd(), bundle1)),
          readFileSync(join(process.cwd(), bundle2))
        );
      }
    }
    ipcMain.on('openFile', (_event) => {
      const path = `${
        process.env.NODE_ENV === 'production' ? 'resources/' : ''
      }assets/readme.md`;

      shell.openPath(join(process.cwd(), path));
    });
    ipcMain.on('changeFuParams', async (_event, data) => {
      await this.setup;
      const { name, value } = data;
      // console.log(name, value);
      this.changeFuParams(name, value);
    });
    ipcMain.handle('init', async (_event, data) => {
      await this.setup;
      const { videoSize } = data;
      this.canvasSize.width = videoSize.width;
      this.canvasSize.height = videoSize.height;
    });

    ipcMain.handle('render', async (_event, obj) => {
      const entry = Date.now();
      const { frameData, width, height } = obj;
      const start = process.uptime();
      const frame = Render(
        width,
        height,
        0,
        new Int32Array([this.beauty.handle]),
        Buffer.from(frameData)
      );
      const end = process.uptime();
      const time = Math.floor((end - start) * 1000);
      const imgData = frame.getRawData() as Buffer;
      if (global.sharedObject.openVirtual) {
        if (!this.flag) {
          this.flag = true;
          if (!this.isMac) {
            createVirturalCamera(CameraType.RGBA, width, height);
          }
        }
        if (!this.isMac) {
          pushDataToVirturalCamera(frame.getRawData(), width, height);
        }
      } else {
        this.flag = false;
      }
      // return imgData; //转换成原始数据
      return {
        imgData,
        time,
        output: Date.now(),
        entry,
      };
    });

    // vrc虚拟摄像头
    ipcMain.on('setOpenVirtual', (_event, data) => {
      global.sharedObject.openVirtual = data;
    });
  }
  changeFuParams(name: any, value: any) {
    (this.beauty as any)[name](value);
  }
}
