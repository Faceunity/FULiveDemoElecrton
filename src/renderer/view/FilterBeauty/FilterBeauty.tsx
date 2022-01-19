import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { FuInterface } from '../ControlPanel/ControlPanel';
import list_image_origin from '../../../../assets/icons/filter-beauty/list_image_origin.png';
import list_image_bailiang1 from '../../../../assets/icons/filter-beauty/list_image_bailiang1.png';
import list_image_fennen1 from '../../../../assets/icons/filter-beauty/list_image_fennen1.png';
import list_image_xiaoqingxin1 from '../../../../assets/icons/filter-beauty/list_image_xiaoqingxin1.png';
import list_image_lengsediao1 from '../../../../assets/icons/filter-beauty/list_image_lengsediao1.png';
import list_image_nuansediao1 from '../../../../assets/icons/filter-beauty/list_image_nuansediao1.png';
import { 滤镜 } from 'fuSdk/menuType';
import './FilterBeauty.scss';
import FuSlider from 'components/FuSlider/FuSlider';
import { reserveDigitizer } from 'utils/tools';
interface FilterBeautyProps {}

const FilterBeauty: FunctionComponent<FilterBeautyProps & FuInterface> = (
  props
) => {
  const [arrList, setList] = useState([
    { hidden: true, key: 滤镜.原图, icon: list_image_origin },
    { value: 40, key: 滤镜.白亮, icon: list_image_bailiang1 },
    { value: 40, key: 滤镜.粉嫩, icon: list_image_fennen1 },
    { value: 40, key: 滤镜.小清新, icon: list_image_xiaoqingxin1 },
    { value: 40, key: 滤镜.冷色调, icon: list_image_lengsediao1 },
    { value: 40, key: 滤镜.暖色调, icon: list_image_nuansediao1 },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { fuSdkChange } = props;
  const changeFuSdk = (key: 滤镜) => {
    fuSdkChange('滤镜', key);
  };
  const changeValue = (value: any) => {
    const arr = [...arrList];
    arr[activeIndex].value = value;
    setList(arr);
  };
  useEffect(()=>{
    setActiveIndex(0)
    fuSdkChange('滤镜', 滤镜.原图);
  },[])
  return (
    <div className="filter-beauty">
      <div className="list">
        {arrList.map((item, index) => {
          return (
            <div
              className={`list-item ${activeIndex === index && 'active'}`}
              key={index}
              onClick={() => {
                setActiveIndex(index);
                changeFuSdk(item.key);
              }}
            >
              <img src={item.icon} alt="" />
            </div>
          );
        })}
      </div>
      <div>
        {!arrList[activeIndex].hidden && (
          <FuSlider
            value={arrList[activeIndex].value || 0}
            setValue={changeValue}
            fuName="滤镜程度"
            fuSdk={(name: string, value: any) => {
              fuSdkChange(name, reserveDigitizer(100, 1, value));
            }}
          ></FuSlider>
        )}
      </div>
    </div>
  );
};

export default FilterBeauty;
