import { FunctionComponent } from 'react';
import './FuIcon.scss';
import Icon from '@ant-design/icons';
interface FuIconProps {
  svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconStyle?: any;
  img?: any;
}

const FuIcon: FunctionComponent<FuIconProps> = (props) => {
  const { img, svg } = props;
  return (
    <div className="fu-icon">
      {img && <img src={img} style={{ ...props.iconStyle }} />}
      {svg && <Icon component={svg} {...props.iconStyle} />}
      <span className="icon-content">{props.children}</span>
    </div>
  );
};

export default FuIcon;
