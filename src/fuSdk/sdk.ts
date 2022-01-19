import {
  CreateItemFromPackage,
  ItemSetParamd,
  ItemSetParams,
  LoadAIModelFromPackage,
  Setup,
  Render,
  SetInputCameraBufferMatrix,
  TRANSFORM_MATRIX,
  SetMaxFaces
} from '@faceunity/cnama';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { FaceShape, 滤镜, 美肤模式 } from './menuType';

export class Beauty {
  handle: number;

  constructor(face_beautification: Buffer, face_processor: Buffer) {
    this.handle = CreateItemFromPackage(face_beautification);
    LoadAIModelFromPackage(face_processor, 1024);
    ItemSetParamd(this.handle, 'face_shape_level', 1);
    SetInputCameraBufferMatrix(TRANSFORM_MATRIX.CCROT180_FLIPVERTICAL)
    SetMaxFaces(4)
    ItemSetParamd(this.handle, 'heavy_blur', 0)
  }

  精准美肤(flag: boolean) {
    ItemSetParamd(this.handle, 'skin_detect', flag === true ? 1 : 0);
  }

  美肤模式(mode: 美肤模式) {
    ItemSetParamd(this.handle, 'blur_type', mode);
  }

  /**
   *
   * @param level 0.0~6.0默认为6.0
   */
  磨皮程度(level: number) {
    ItemSetParamd(this.handle, 'blur_level', level);
  }

  /**
   *
   * @param level 0.0-1.0,0.0为无效果，1.0为最大效果，默认值0.2
   */
  美白程度(level: number) {
    ItemSetParamd(this.handle, 'color_level', level);
  }

  /**
   *
   * @param level 0.0-1.0,0.0为无效果，1.0为最大效果，默认值0.5
   */
  红润程度(level: number) {
    ItemSetParamd(this.handle, 'red_level', level);
  }

  /**
   *
   * @param level 取值范围0.0-1.0，默认0.2
   */
  锐化程度(level: number) {
    ItemSetParamd(this.handle, 'sharpen', level);
  }

  /**
   *
   * @param level 0.0-1.0,0.0为无效果，1.0为最大效果，默认值1.0
   */
  亮眼程度(level: number) {
    ItemSetParamd(this.handle, 'eye_bright', level);
  }

  /**
   *
   * @param level 0.0-1.0,0.0为无效果，1.0为最大效果，默认值1.0
   */
  美牙程度(level: number) {
    ItemSetParamd(this.handle, 'tooth_whiten', level);
  }

  /**
   *
   * @param level 范围0.0~1.0 0.0为无效果，1.0最强，默认0.0
   */
  去黑眼圈(level: number) {
    ItemSetParamd(this.handle, 'remove_pouch_strength', level);
  }

  /**
   *
   * @param level 范围0.0~1.0 0.0为无效果，1.0最强，默认0.0
   */
  去法令纹(level: number) {
    ItemSetParamd(this.handle, 'remove_nasolabial_folds_strength', level);
  }

  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  瘦脸程度(level: number) {
    ItemSetParamd(this.handle, 'cheek_thinning', level);
  }

  faceshape(type: FaceShape) {
    ItemSetParamd(this.handle, 'face_shape', type);
  }

  /**
   *
   * @param level 默认0.5,范围0.0-1.0
   */
  大眼程度(level: number) {
    ItemSetParamd(this.handle, 'eye_enlarging_v2', level);
  }
  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  圆眼程度(level: number) {
    ItemSetParamd(this.handle, 'intensity_eye_circle', level);
  }
  /**
   *
   * @param level 默认0.5,范围0.0-1.0，0-0.5是变小，0.5-1是变大
   */
  下巴调整(level: number) {
    ItemSetParamd(this.handle, 'intensity_chin', level);
  }
  /**
   *
   * @param level 默认0.5,范围0.0-1.0，0-0.5是变小，0.5-1是变大
   */
  额头调整(level: number) {
    ItemSetParamd(this.handle, 'intensity_forehead_v2', level);
  }
  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  瘦鼻程度(level: number) {
    ItemSetParamd(this.handle, 'intensity_nose_v2', level);
  }
  /**
   *
   * @param level 默认0.5,范围0.0-1.0，0-0.5是变大，0.5-1是变小
   */
  嘴型调整(level: number) {
    ItemSetParamd(this.handle, 'intensity_mouth_v2', level);
  }
  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  V脸程度(level: number) {
    ItemSetParamd(this.handle, 'cheek_v', level);
  }

  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  窄脸程度(level: number) {
    ItemSetParamd(this.handle, 'cheek_narrow_v2', level);
  }

  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  小脸程度(level: number) {
    ItemSetParamd(this.handle, 'cheek_small_v2', level);
  }

  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  瘦颧骨程度(level: number) {
    ItemSetParamd(this.handle, 'intensity_cheekbones', level);
  }

  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  瘦下颌骨程度(level: number) {
    ItemSetParamd(this.handle, 'intensity_lower_jaw', level);
  }

  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  开眼角程度(level: number) {
    ItemSetParamd(this.handle, 'intensity_canthus', level);
  }

  /**
   *
   * @param level 默认0.5,范围0.0~1.0， 0.5-0.0变长，0.5-1.0变短
   */
  眼距调节(level: number) {
    ItemSetParamd(this.handle, 'intensity_eye_space', level);
  }

  /**
   *
   * @param level 默认0.5,范围0.0~1.0， 0.5-0.0逆时针旋转，0.5-1.0顺时针旋转
   */
  眼睛角度调节(level: number) {
    ItemSetParamd(this.handle, 'intensity_eye_rotate', level);
  }

  /**
   *
   * @param level 默认0.5,范围0.0~1.0， 0.5-0.0变长，0.5-1.0变短
   */
  鼻子长度调节(level: number) {
    ItemSetParamd(this.handle, 'intensity_long_nose', level);
  }

  /**
   *
   * @param level 默认0.5,范围0.0~1.0， 0.5-1.0变长，0.5-0.0变短
   */
  人中调节(level: number) {
    ItemSetParamd(this.handle, 'intensity_philtrum', level);
  }

  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  微笑嘴角程度(level: number) {
    ItemSetParamd(this.handle, 'intensity_smile', level);
  }

  滤镜(type: 滤镜) {
    ItemSetParams(this.handle, 'filter_name', type);
  }
  /**
   *
   * @param level 默认0.0,范围0.0-1.0
   */
  短脸程度(level: number) {
    ItemSetParamd(this.handle, 'cheek_short', level);
  }

  /**
   *
   * @param level 默认1.0,范围0.0-1.0,为0时无效果
   */
  滤镜程度(level: number) {
    ItemSetParamd(this.handle, 'filter_level', level);
  }
}
