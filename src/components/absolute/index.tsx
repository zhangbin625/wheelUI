import React, { memo } from "react";
import { px2vw } from "../util";
interface Props {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Absolute: React.FC<Props> = memo((props) => {
  const { children, top, bottom, left, right } = props;
  const style: React.CSSProperties = {
    position: `absolute`,
    top:top && px2vw(top),
    bottom:bottom && px2vw(bottom),
    left:left && px2vw(left),
    right:right && px2vw(right),
  };
  return <div style={style}>{children}</div>;
});

export { Absolute };
