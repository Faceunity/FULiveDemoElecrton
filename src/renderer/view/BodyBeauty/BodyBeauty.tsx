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
  const [faceLift, setFaceList] = useState(0); //??????
  const [bigEyes, setBigEyes] = useState(40); //??????
  const [circleEyes, setCircleEyes] = useState(0); //??????
  const [jaw, setJaw] = useState(-20); //??????
  const [forehead, setForehead] = useState(-20); //??????
  const [thinNasal, setThinNasal] = useState(50); //??????
  const [mouth, setMouth] = useState(-10); //??????
  const [vFace, setVFace] = useState(50); //V???
  const [narrowFace, setNarrowFace] = useState(0); //??????
  const [shortFace, setShortFace] = useState(0); //??????
  const [littleFace, setLittleFace] = useState(0); //??????
  const [zygoma, setZygoma] = useState(0); //??????
  const [jaw2, setJaw2] = useState(0); //??????
  const [canth, setCanth] = useState(0); //??????
  const [eyeSpace, setEyeSpace] = useState(0); //??????
  const [eyeAngle, setEyeAngle] = useState(0); //????????????
  const [nose, setNose] = useState(0); //??????
  const [philtrum, setPhiltrum] = useState(0); //?????????
  const [smile, setSmile] = useState(0); //??????
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
            iconText="??????"
            value={faceLift}
            setValue={setFaceList}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_bigeye_open}
            closeIcon={list_icon_bigeye_close}
            iconText="??????"
            value={bigEyes}
            setValue={setBigEyes}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_round_eye_open}
            closeIcon={list_icon_round_eye_close}
            iconText="??????"
            value={circleEyes}
            setValue={setCircleEyes}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_chin_open}
            closeIcon={list_icon_chin_close}
            iconText="??????"
            value={jaw}
            setValue={setJaw}
            range={true}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_forehead_open}
            closeIcon={list_icon_forehead_close}
            iconText="??????"
            value={forehead}
            range={true}
            setValue={setForehead}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_thinnose_open}
            closeIcon={list_icon_thinnose_close}
            iconText="??????"
            value={thinNasal}
            setValue={setThinNasal}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_mouthtype_open}
            closeIcon={list_icon_mouthtype_close}
            iconText="??????"
            value={mouth}
            setValue={setMouth}
            range={true}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_v_open}
            closeIcon={list_icon_v_close}
            iconText="V???"
            value={vFace}
            setValue={setVFace}
            fuName="V?????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_narrow_face_open}
            closeIcon={list_icon_narrow_face_close}
            iconText="??????"
            value={narrowFace}
            setValue={setNarrowFace}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_narrow_face_ope}
            closeIcon={list_icon_narrow_face_clos}
            iconText="??????"
            value={shortFace}
            setValue={setShortFace}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_little_face_open}
            closeIcon={list_icon_little_face_close}
            iconText="??????"
            value={littleFace}
            setValue={setLittleFace}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_cheekbones_open}
            closeIcon={list_icon_cheekbones_close}
            iconText="?????????"
            value={zygoma}
            setValue={setZygoma}
            fuName="???????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_lower_jaw_open}
            closeIcon={list_icon_lower_jaw_close}
            iconText="????????????"
            value={jaw2}
            setValue={setJaw2}
            fuName="??????????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_open_eyes_open}
            closeIcon={list_icon_open_eyes_close}
            iconText="?????????"
            value={canth}
            setValue={setCanth}
            fuName="???????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_eye_distance_open}
            closeIcon={list_icon_eye_distance_close}
            iconText="??????"
            value={eyeSpace}
            range={true}
            setValue={setEyeSpace}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_eye_angle_open}
            closeIcon={list_icon_eye_angle_close}
            iconText="????????????"
            value={eyeAngle}
            range={true}
            setValue={setEyeAngle}
            fuName="??????????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_proboscis_open}
            closeIcon={list_icon_proboscis_close}
            iconText="??????"
            value={nose}
            range={true}
            setValue={setNose}
            fuName="??????????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_shrinking_open}
            closeIcon={list_icon_shrinking_close}
            iconText="?????????"
            value={philtrum}
            range={true}
            setValue={setPhiltrum}
            fuName="????????????"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, bothReserveDigitizer(50, 1, 0, 0.5, value));
            }}
          ></FuSlider>
        </div>
        <div className="body-beauty-item">
          <FuSlider
            icon={list_icon_smile_mouth_open}
            closeIcon={list_icon_smile_mouth_close}
            iconText="????????????"
            value={smile}
            setValue={setSmile}
            fuName="??????????????????"
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
          ????????????
        </FuButton>
      </div>
    </div>
  );
};

export default BodyBeauty;
