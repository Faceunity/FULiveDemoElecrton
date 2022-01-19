import FuSlider from 'components/FuSlider/FuSlider';
import React, { FunctionComponent, useState } from 'react';
import { bothReserveDigitizer, reserveDigitizer } from 'utils/tools';
// import list_icon_avatar_nor from '../../../../assets/icons/list_icon_avatar_nor.png';
import list_icon_thinface_open from '../../../../assets/icons/body-beauty/list_icon_thinface_open.png';
import list_icon_thinface_close from '../../../../assets/icons/body-beauty/list_icon_thinface_close.png';
import list_icon_bigeye_open from '../../../../assets/icons/body-beauty/list_icon_bigeye_open.png';
import list_icon_bigeye_close from '../../../../assets/icons/body-beauty/list_icon_bigeye_close.png';
import list_icon_round_eye_open from '../../../../assets/icons/body-beauty/list_icon_round_eye_open.png';
import list_icon_round_eye_close from '../../../../assets/icons/body-beauty/list_icon_round_eye_close.png';
import list_icon_chin_open from '../../../../assets/icons/body-beauty/list_icon_chin_open.png';
import list_icon_chin_close from '../../../../assets/icons/body-beauty/list_icon_chin_close.png';
import list_icon_forehead_open from '../../../../assets/icons/body-beauty/list_icon_forehead_open.png';
import list_icon_forehead_close from '../../../../assets/icons/body-beauty/list_icon_forehead_close.png';
import list_icon_thinnose_open from '../../../../assets/icons/body-beauty/list_icon_thinnose_open.png';
import list_icon_thinnose_close from '../../../../assets/icons/body-beauty/list_icon_thinnose_close.png';
import list_icon_mouthtype_open from '../../../../assets/icons/body-beauty/list_icon_mouthtype_open.png';
import list_icon_mouthtype_close from '../../../../assets/icons/body-beauty/list_icon_mouthtype_close.png';
import list_icon_v_open from '../../../../assets/icons/body-beauty/list_icon_v_open.png';
import list_icon_v_close from '../../../../assets/icons/body-beauty/list_icon_v_open.png';
import list_icon_narrow_face_open from '../../../../assets/icons/body-beauty/list_icon_narrow_face_open.png';
import list_icon_narrow_face_close from '../../../../assets/icons/body-beauty/list_icon_narrow_face_close.png';
import list_icon_narrow_face_ope from '../../../../assets/icons/body-beauty/list_icon_narrow_face_ope.png';
import list_icon_narrow_face_clos from '../../../../assets/icons/body-beauty/list_icon_narrow_face_clos.png';
import list_icon_little_face_open from '../../../../assets/icons/body-beauty/list_icon_little_face_open.png';
import list_icon_little_face_close from '../../../../assets/icons/body-beauty/list_icon_little_face_close.png';
import list_icon_cheekbones_open from '../../../../assets/icons/body-beauty/list_icon_cheekbones_open.png';
import list_icon_cheekbones_close from '../../../../assets/icons/body-beauty/list_icon_cheekbones_close.png';
import list_icon_lower_jaw_open from '../../../../assets/icons/body-beauty/list_icon_lower_jaw_open.png';
import list_icon_lower_jaw_close from '../../../../assets/icons/body-beauty/list_icon_lower_jaw_close.png';
import list_icon_open_eyes_open from '../../../../assets/icons/body-beauty/list_icon_open_eyes_open.png';
import list_icon_open_eyes_close from '../../../../assets/icons/body-beauty/list_icon_open_eyes_close.png';
import list_icon_eye_distance_open from '../../../../assets/icons/body-beauty/list_icon_eye_distance_open.png';
import list_icon_eye_distance_close from '../../../../assets/icons/body-beauty/list_icon_eye_distance_close.png';
import list_icon_eye_angle_open from '../../../../assets/icons/body-beauty/list_icon_eye_angle_open.png';
import list_icon_eye_angle_close from '../../../../assets/icons/body-beauty/list_icon_eye_angle_close.png';
import list_icon_proboscis_open from '../../../../assets/icons/body-beauty/list_icon_proboscis_open.png';
import list_icon_proboscis_close from '../../../../assets/icons/body-beauty/list_icon_proboscis_close.png';
import list_icon_shrinking_open from '../../../../assets/icons/body-beauty/list_icon_shrinking_open.png';
import list_icon_shrinking_close from '../../../../assets/icons/body-beauty/list_icon_shrinking_close.png';
import list_icon_smile_mouth_open from '../../../../assets/icons/body-beauty/list_icon_smile_mouth_open.png';
import list_icon_smile_mouth_close from '../../../../assets/icons/body-beauty/list_icon_smile_mouth_close.png';

import './BodyBeauty.scss';
import FuButton from 'components/FuButton/FuButton';
interface BodyBeautyProps {
  fuSdkChange: Function;
}

const BodyBeauty: FunctionComponent<BodyBeautyProps> = (props) => {
  const { fuSdkChange } = props;
  const [faceLift, setFaceList] = useState(0); //瘦脸
  const [bigEyes, setBigEyes] = useState(40); //大眼
  const [circleEyes, setCircleEyes] = useState(0); //圆眼
  const [jaw, setJaw] = useState(-20); //下巴
  const [forehead, setForehead] = useState(-20); //额头
  const [thinNasal, setThinNasal] = useState(50); //瘦鼻
  const [mouth, setMouth] = useState(-10); //嘴型
  const [vFace, setVFace] = useState(50); //V脸
  const [narrowFace, setNarrowFace] = useState(0); //窄脸
  const [shortFace, setShortFace] = useState(0); //短脸
  const [littleFace, setLittleFace] = useState(0); //小脸
  const [zygoma, setZygoma] = useState(0); //颧骨
  const [jaw2, setJaw2] = useState(0); //颌骨
  const [canth, setCanth] = useState(0); //眼角
  const [eyeSpace, setEyeSpace] = useState(0); //眼距
  const [eyeAngle, setEyeAngle] = useState(0); //眼睛角度
  const [nose, setNose] = useState(0); //长鼻
  const [philtrum, setPhiltrum] = useState(0); //缩人中
  const [smile, setSmile] = useState(0); //微笑
  const resetBtn = () => {
    // fuSdkChange('faceshape', 4);
    setFaceList(0);
    setBigEyes(40);
    setCircleEyes(0);
    setJaw(-20);
    setForehead(-20);
    setThinNasal(50);
    setMouth(-10);
    setVFace(50);
    setNarrowFace(0);
    setShortFace(0);
    setLittleFace(0);
    setZygoma(0);
    setJaw2(0);
    setCanth(0);
    setEyeSpace(0);
    setEyeAngle(0);
    setNose(0);
    setPhiltrum(0);
    setSmile(0);
  };
  return (
    <div className="body-beauty-root">
      <div className="body-beauty">
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_thinface_open}
            closeIcon={list_icon_thinface_close}
            iconText="瘦脸"
            value={faceLift}
            setValue={setFaceList}
            fuName="瘦脸程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_bigeye_open}
            closeIcon={list_icon_bigeye_close}
            iconText="大眼"
            value={bigEyes}
            setValue={setBigEyes}
            fuName="大眼程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_round_eye_open}
            closeIcon={list_icon_round_eye_close}
            iconText="圆眼"
            value={circleEyes}
            setValue={setCircleEyes}
            fuName="圆眼程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_chin_open}
            closeIcon={list_icon_chin_close}
            iconText="下巴"
            value={jaw}
            setValue={setJaw}
            range={true}
            fuName="下巴调整"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_forehead_open}
            closeIcon={list_icon_forehead_close}
            iconText="额头"
            value={forehead}
            range={true}
            setValue={setForehead}
            fuName="额头调整"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_thinnose_open}
            closeIcon={list_icon_thinnose_close}
            iconText="瘦鼻"
            value={thinNasal}
            setValue={setThinNasal}
            fuName="瘦鼻程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_mouthtype_open}
            closeIcon={list_icon_mouthtype_close}
            iconText="嘴型"
            value={mouth}
            setValue={setMouth}
            range={true}
            fuName="嘴型调整"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_v_open}
            closeIcon={list_icon_v_close}
            iconText="V脸"
            value={vFace}
            setValue={setVFace}
            fuName="V脸程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_narrow_face_open}
            closeIcon={list_icon_narrow_face_close}
            iconText="窄脸"
            value={narrowFace}
            setValue={setNarrowFace}
            fuName="窄脸程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_narrow_face_ope}
            closeIcon={list_icon_narrow_face_clos}
            iconText="短脸"
            value={shortFace}
            setValue={setShortFace}
            fuName="短脸程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_little_face_open}
            closeIcon={list_icon_little_face_close}
            iconText="小脸"
            value={littleFace}
            setValue={setLittleFace}
            fuName="小脸程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_cheekbones_open}
            closeIcon={list_icon_cheekbones_close}
            iconText="瘦颧骨"
            value={zygoma}
            setValue={setZygoma}
            fuName="瘦颧骨程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_lower_jaw_open}
            closeIcon={list_icon_lower_jaw_close}
            iconText="瘦下颌骨"
            value={jaw2}
            setValue={setJaw2}
            fuName="瘦下颌骨程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_open_eyes_open}
            closeIcon={list_icon_open_eyes_close}
            iconText="开眼角"
            value={canth}
            setValue={setCanth}
            fuName="开眼角程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_eye_distance_open}
            closeIcon={list_icon_eye_distance_close}
            iconText="眼距"
            value={eyeSpace}
            range={true}
            setValue={setEyeSpace}
            fuName="眼距调节"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_eye_angle_open}
            closeIcon={list_icon_eye_angle_close}
            iconText="眼睛角度"
            value={eyeAngle}
            range={true}
            setValue={setEyeAngle}
            fuName="眼睛角度调节"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_proboscis_open}
            closeIcon={list_icon_proboscis_close}
            iconText="长鼻"
            value={nose}
            range={true}
            setValue={setNose}
            fuName="鼻子长度调节"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_shrinking_open}
            closeIcon={list_icon_shrinking_close}
            iconText="缩人中"
            value={philtrum}
            range={true}
            setValue={setPhiltrum}
            fuName="人中调节"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_smile_mouth_open}
            closeIcon={list_icon_smile_mouth_close}
            iconText="微笑嘴角"
            value={smile}
            setValue={setSmile}
            fuName="微笑嘴角程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
      </div>
      <div className="reset">
        <FuButton
          style={{
            width: '126px',
          }}
          onClick={resetBtn}
        >
          恢复默认
        </FuButton>
      </div>
    </div>
  );
};

export default BodyBeauty;
