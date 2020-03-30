import React from "react";
import { px2vw } from "../util";

interface Props {
  /**
   * 用来设置baseline展示方向，center居中显示，left居左显示，right居右显示
   */
  align?: "center" | "left" | "right";
  /**
   * 设置baseline的宽度
   */
  width?: number;
  /**
   * 用来设置baseline的颜色
   */
  color?: string;
  /**
   * 用来设置baseline的高度
   */
  height?: number;
  /**
   * 用来设置baseline的上边距
   */
  top?: number;
  /**
   * 用来设置baseline的下边距
   */
  bottom?: number;
  /**
   * 用来设置baseline的样式，solid为实线，dashed为虚线
   */
  type?: "solid" | "dashed";
}
export const BaseLine: React.FC<Props> = React.memo(props => {
  const {
    align,
    width = 750,
    color = "#EEEEEE",
    height = 2,
    top = 0,
    bottom,
    type = "solid"
  } = props;
  let justifyContent;
  switch (align) {
    case "center":
      justifyContent = "center";
      break;
    case "left":
      justifyContent = "flex-start";
      break;
    case "right":
      justifyContent = "flex-end";
      break;
    default:
      justifyContent = "center";
      break;
  }
  const body = {
    display: "flex",
    justifyContent,
    marginTop: px2vw(top),
    marginBottom: bottom && px2vw(bottom),
    width: "100%"
  };
  const line = {
    width: px2vw(width),
    borderBottom: `${color} ${px2vw(height)} ${type}`
  };
  return (
    <div style={body}>
      <div style={line}></div>
    </div>
  );
});
