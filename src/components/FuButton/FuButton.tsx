import { FunctionComponent } from 'react';
import { Button, ButtonProps } from 'antd';

import './FuButton.scss';

const FuButton = (props: ButtonProps) => {
  return (
    <div className="fu-button">
      <Button {...props}>{props.children}</Button>
    </div>
  );
};

export default FuButton;
