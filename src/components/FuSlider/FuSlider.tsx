import {
  CSSProperties,
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { InputNumber, Slider } from 'antd';
import Icon from '@ant-design/icons';
import './FuSlider.scss';
import FuIcon from 'components/FuIcon/FuIcon';
interface FuSliderProps {
  svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconStyle?: any;
  icon?: any;
  closeIcon?: any;
  iconText?: string;
  range?: boolean;
  max?: number;
  min?: number;
  value: number;
  setValue: Function;
  fuName?: string;
  fuSdk?: Function;
}
enum ClassActive {
  rightActive = 'rightActive',
  leftActive = 'leftActive',
}
const FuSlider: FunctionComponent<FuSliderProps> = (props) => {
  const {
    icon,
    closeIcon,
    svg,
    max,
    min,
    value,
    range = false,
    fuName,
  } = props;

  const [sliderMax, setSliderMax] = useState(100);
  const [sliderMin, setSliderMin] = useState(0);
  useEffect(() => {
    props.fuSdk && props.fuSdk(fuName, value);
  }, [value]);
  useEffect(() => {
    if (range) {
      setSliderMax(50);
      setSliderMin(-50);
    }
    if (max !== undefined) setSliderMax(max);
    if (min !== undefined) setSliderMax(min);
  }, [range, max, min]);
  const sliderValue: any = useMemo(() => {
    if (props.range) {
      if (value >= 0) {
        return [0, value];
      } else {
        return [value, 0];
      }
    } else {
      return value;
    }
  }, [props.range, value]);
  const sliderClassActive: string = useMemo(() => {
    if (props.range) {
      if (value >= 0) {
        return ClassActive.rightActive;
      } else {
        return ClassActive.leftActive;
      }
    }
    return '';
  }, [props.range, value]);
  const handleSliderChange = (value: any) => {
    if (typeof value === 'number') {
      props.setValue(value);
    } else {
      const val = (value as []).find((num) => {
        return num !== 0;
      });
      props.setValue(val || 0);
    }
  };
  const handleNumChange = (value: any) => {
    props.setValue(value);
  };
  const iconImg = useMemo(() => {
    if (value === 0) {
      return closeIcon ? closeIcon : icon;
    } else {
      return icon;
    }
  }, [props.value]);
  return (
    <div className="fu-slider">
      {icon && <FuIcon img={iconImg}>{props.iconText}</FuIcon>}
      <div className="slider">
        <Slider
          className={sliderClassActive}
          value={sliderValue}
          max={sliderMax}
          min={sliderMin}
          range={range}
          onChange={handleSliderChange}
        ></Slider>
      </div>
      <InputNumber
        value={value}
        onChange={handleNumChange}
        controls={false}
        max={sliderMax}
        min={sliderMin}
      />
    </div>
  );
};

export default FuSlider;
