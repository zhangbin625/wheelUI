import React from "react";
import { px2vw } from "../util";
interface Props {
  /**
   * Icon背景颜色
   */
  background?: string;
  /**
   * 设置Icon边框大小
   */
  border?: number;
  /**
   * 设置Icon边框颜色
   */
  borderColor?: string;
  /**
   * 设置Icon边框样式，solid为实线，dashed为虚线
   */
  borderType?: "solid" | "dashed";
  /**
   * 设置Icon左上边界半径
   */
  topLeftRadius?: number;
  /**
   * 设置Icon右上边界半径
   */
  topRightRadius?: number;
  /**
   * 设置Icon左下边界半径
   */
  bottomLeftRadius?: number;
  /**
   * 设置Icon右下边界半径
   */
  bottomRightRadius?: number;
  /**
   * 设置Icon水平方向内边距
   */
  levelPadding?: number;
  /**
   * 设置Icon垂直方向内边距
   */
  verticalPadding?: number;
  /**
   * 设置Icon左边框外边距
   */
  left?: number;
  /**
   * 设置Icon上边框外边距
   */
  top?: number;
  /**
   * 设置Icon右边框方外边距
   */
  right?: number;
  /**
   * 设置Icon下边框外边距
   */
  bottom?: number;
}

export const Icon: React.FC<Props> = React.memo(props => {
  const {
    children,
    background,
    border,
    borderColor = "#EEEEEE",
    borderType = "solid",
    topLeftRadius = 0,
    topRightRadius = 0,
    bottomLeftRadius = 0,
    bottomRightRadius = 0,
    levelPadding = 19,
    verticalPadding = 0,
    left,
    right,
    bottom,
    top
  } = props;
  const style: React.CSSProperties = {
    display: "inline-block",
    background,
    border: border
      ? `${px2vw(border)} ${borderColor} ${borderType}`
      : undefined,
    padding: `${px2vw(verticalPadding)} ${px2vw(levelPadding)} `,
    borderRadius: `${px2vw(topLeftRadius)} ${px2vw(topRightRadius)} ${px2vw(
      bottomRightRadius
    )} ${px2vw(bottomLeftRadius)}`,
    marginTop: top ? px2vw(top) : undefined,
    marginBottom: bottom ? px2vw(bottom) : undefined,
    marginLeft: left ? px2vw(left) : undefined,
    marginRight: right ? px2vw(right) : undefined
  };
  return <div style={style}>{children}</div>;
});
