import React from "react";
import { px2vw } from "../util";

interface Props {
  /**
   * 设置Round组件的大小
   */
  size?: number;
  /**
   * 设置Round组件的颜色值
   */
  color?: string;
  /**
   * 设置Round组件边框大小
   */
  border?: number;
  /**
   * 设置Round组件边框的颜色
   */
  borderColor?: string;
  /**
   * 设置Round组件边框样式，solid为实线，dashed为虚线
   */
  borderType?: "solid" | "dashed";
  /**
   * 设置Round组件左边框边距
   */
  left?: number;
  /**
   * 设置Round组件上边框边距
   */
  top?: number;
  /**
   * 设置Round组件有边框边距
   */
  right?: number;
  /**
   * 设置Round组件下边框边距
   */
  bottom?: number;
}

export const Round: React.FC<Props> = React.memo(props => {
  const {
    size = 18,
    color = "red",
    border,
    borderColor = "#EEEEEE",
    borderType = "solid",
    left,
    top,
    bottom,
    right
  } = props;
  const style: React.CSSProperties = {
    height: px2vw(size),
    width: px2vw(size),
    borderRadius: "50%",
    background: color,
    border: border
      ? `${px2vw(border)} ${borderColor} ${borderType} `
      : undefined,
    marginTop: top ? px2vw(top) : undefined,
    marginBottom: bottom ? px2vw(bottom) : undefined,
    marginRight: right ? px2vw(right) : undefined,
    marginLeft: left ? px2vw(left) : undefined
  };
  return <div style={style}></div>;
});
