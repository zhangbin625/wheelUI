import React from "react";
import { px2vw } from "../../util";

interface Props {
  onClick?: () => void;
  levelPadding?: number;
  verticalPadding?: number;
  radius?: number;
  color?: string;
  left?: number;
  top?: number;
}

export const Background: React.FC<Props> = React.memo(props => {
  const {
    children,
    verticalPadding = 10,
    levelPadding = 30,
    radius = 40,
    color = "#EEF0F6",
    left = 0,
    top = 0
  } = props;
  const style = {
    display: "inline-block",
    padding: `${px2vw(verticalPadding)} ${px2vw(levelPadding)}`,
    background: color,
    borderRadius: px2vw(radius),
    marginTop:px2vw(top),
    marginLeft:px2vw(left)
  };
  return <div style={style}>{children}</div>;
});
