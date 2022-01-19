import { Button } from 'antd';
import FuButton from 'components/FuButton/FuButton';
import FuIcon from 'components/FuIcon/FuIcon';
import FuSlider from 'components/FuSlider/FuSlider';
import { 美肤模式 } from 'fuSdk/menuType';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { reserveDigitizer } from 'utils/tools';
import { FuInterface } from '../ControlPanel/ControlPanel';
import list_icon_skinbeauty_open from '../../../../assets/icons/skin-beauty/list_icon_skinbeauty_open.png';
import list_icon_skinbeauty_close from '../../../../assets/icons/skin-beauty/list_icon_skinbeauty_close.png';
import list_icon_beautymode_open from '../../../../assets/icons/skin-beauty/list_icon_beautymode_open.png';
import list_icon_grindingskin_open from '../../../../assets/icons/skin-beauty/list_icon_grindingskin_open.png';
import list_icon_grindingskin_close from '../../../../assets/icons/skin-beauty/list_icon_grindingskin_close.png';
import list_icon_skinwhitening_open from '../../../../assets/icons/skin-beauty/list_icon_skinwhitening_open.png';
import list_icon_skinwhitening_close from '../../../../assets/icons/skin-beauty/list_icon_skinwhitening_close.png';
import list_icon_ruddy_open from '../../../../assets/icons/skin-beauty/list_icon_ruddy_open.png';
import list_icon_ruddy_close from '../../../../assets/icons/skin-beauty/list_icon_ruddy_close.png';
import list_iconsharpen_open from '../../../../assets/icons/skin-beauty/list_iconsharpen_open.png';
import list_iconsharpen_close from '../../../../assets/icons/skin-beauty/list_iconsharpen_close.png';
import list_icon_brighteye_open from '../../../../assets/icons/skin-beauty/list_icon_brighteye_open.png';
import list_icon_brighteye_close from '../../../../assets/icons/skin-beauty/list_icon_brighteye_close.png';
import list_iconbeautifulteeth_open from '../../../../assets/icons/skin-beauty/list_iconbeautifulteeth_open.png';
import list_iconbeautifulteeth_close from '../../../../assets/icons/skin-beauty/list_iconbeautifulteeth_close.png';
import list_icon_dark_circles_open from '../../../../assets/icons/skin-beauty/list_icon_dark_circles_open.png';
import list_icon_dark_circles_close from '../../../../assets/icons/skin-beauty/list_icon_dark_circles_close.png';
import list_icon_wrinkle_open from '../../../../assets/icons/skin-beauty/list_icon_wrinkle_open.png';
import list_icon_wrinkle_close from '../../../../assets/icons/skin-beauty/list_icon_wrinkle_close.png';

import './SkinBeauty.scss';
interface SkinBeautyProps {}

const SkinBeauty: FunctionComponent<SkinBeautyProps & FuInterface> = (
  props
) => {
  const [skinBtnAct, setSkinBtnAct] = useState(0);
  const [skinModeBtnAct, setSkinModeBtnAct] = useState(0);
  const [buffing, setBuffing] = useState(70); // 磨皮
  const [skin, setSkin] = useState(30); // 美白
  const [ruddy, setRuddy] = useState(30); // 红润
  const [sharpen, setSharpen] = useState(20); // 锐化
  const [bright, setBright] = useState(0); // 亮眼
  const [tooth, setTooth] = useState(0); // 美牙
  const [blackEye, setBlackEye] = useState(0); // 黑眼圈
  const [folds, setFolds] = useState(0); // 法令纹

  const { fuSdkChange } = props;
  const fuButtonClick = useCallback((name: any, value: any) => {
    fuSdkChange(name, value);
  }, []);
  useEffect(() => {
    fuButtonClick('精准美肤', true);
    fuButtonClick('美肤模式', 美肤模式.均匀磨皮);
  }, []);
  const resetBtn = useCallback(() => {
    fuButtonClick('精准美肤', true);
    fuButtonClick('美肤模式', 美肤模式.均匀磨皮);
    setSkinBtnAct(0);
    setSkinModeBtnAct(0);
    setBuffing(70);
    setSkin(30);
    setRuddy(30);
    setSharpen(20);
    setBright(0);
    setTooth(0);
    setBlackEye(0);
    setFolds(0);
  }, []);
  return (
    <div className="skin-beauty-root">
      <div className="skin-beauty">
        <div className="skin-beauty-item">
          <FuIcon
            img={
              skinBtnAct === 0
                ? list_icon_skinbeauty_open
                : list_icon_skinbeauty_close
            }
          >
            精准美肤
          </FuIcon>
          <FuButton
            type={skinBtnAct === 0 ? 'primary' : 'default'}
            onClick={() => {
              setSkinBtnAct(0);
              fuButtonClick('精准美肤', true);
            }}
          >
            开启
          </FuButton>
          <FuButton
            type={skinBtnAct === 1 ? 'primary' : 'default'}
            onClick={() => {
              setSkinBtnAct(1);
              fuButtonClick('精准美肤', false);
            }}
          >
            关闭
          </FuButton>
        </div>
        <div className="skin-beauty-item">
          <FuIcon img={list_icon_beautymode_open}>美肤模式</FuIcon>
          <div className="tule">
            <FuButton
              type={skinModeBtnAct === 0 ? 'primary' : 'default'}
              onClick={() => {
                setSkinModeBtnAct(0);
                fuButtonClick('美肤模式', 美肤模式.均匀磨皮);
              }}
            >
              {'均匀磨皮'}
            </FuButton>
            <FuButton
              type={skinModeBtnAct === 1 ? 'primary' : 'default'}
              onClick={() => {
                setSkinModeBtnAct(1);
                fuButtonClick('美肤模式', 美肤模式.精细磨皮);
              }}
            >
              {'精细磨皮'}
            </FuButton>
            <FuButton
              type={skinModeBtnAct === 2 ? 'primary' : 'default'}
              onClick={() => {
                setSkinModeBtnAct(2);
                fuButtonClick('美肤模式', 美肤模式.清晰磨皮);
              }}
            >
              {'清晰磨皮'}
            </FuButton>
            <FuButton
              type={skinModeBtnAct === 3 ? 'primary' : 'default'}
              onClick={() => {
                setSkinModeBtnAct(3);
                fuButtonClick('美肤模式', 美肤模式.朦胧磨皮);
              }}
            >
              {'朦胧磨皮'}
            </FuButton>
          </div>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            icon={list_icon_grindingskin_open}
            closeIcon={list_icon_grindingskin_close}
            iconText="磨皮"
            value={buffing}
            setValue={setBuffing}
            fuName="磨皮程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 6, value));
            }}
          ></FuSlider>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            iconText="美白"
            icon={list_icon_skinwhitening_open}
            closeIcon={list_icon_skinwhitening_close}
            value={skin}
            setValue={setSkin}
            fuName="美白程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            iconText="红润"
            icon={list_icon_ruddy_open}
            closeIcon={list_icon_ruddy_close}
            value={ruddy}
            setValue={setRuddy}
            fuName="红润程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            iconText="锐化"
            icon={list_iconsharpen_open}
            closeIcon={list_iconsharpen_close}
            value={sharpen}
            setValue={setSharpen}
            fuName="锐化程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            iconText="亮眼"
            icon={list_icon_brighteye_open}
            closeIcon={list_icon_brighteye_close}
            value={bright}
            setValue={setBright}
            fuName="亮眼程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            iconText="美牙"
            icon={list_iconbeautifulteeth_open}
            closeIcon={list_iconbeautifulteeth_close}
            value={tooth}
            setValue={setTooth}
            fuName="美牙程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            iconText="去黑眼圈"
            icon={list_icon_dark_circles_open}
            closeIcon={list_icon_dark_circles_close}
            value={blackEye}
            setValue={setBlackEye}
            fuName="去黑眼圈"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        </div>
        <div className="skin-beauty-item">
          <FuSlider
            iconText="去法令纹"
            icon={list_icon_wrinkle_open}
            closeIcon={list_icon_wrinkle_close}
            value={folds}
            setValue={setFolds}
            fuName="去法令纹"
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

export default SkinBeauty;
