import React from "react";
import styles from "./style.module.css";
import { px2vw } from "../util";
interface Props {
  /**
   * 显示容器外边框，用来给开发者查看容器范围
   */
  showBorder?: boolean;
  /**
   * 设置view区域的点击事件
   */
  onClick?: () => void;
  /**
   * 用来设置view组件高度，如果不设置height，view组件会占满父组件剩余高度
   */
  height?: number;
  /**
   * 用来设置view组件的上边距
   */
  top?: number;
  /**
   * 用来设置view组件的宽度，如果不设置width，view组件会占满父组件剩余宽度
   */
  width?: number;
  /**
   * 用来设置view组件的右边距
   */
  right?: number;
  /**
   * 用来设置view组件的下边距
   */
  bottom?: number;
  /**
   * 用来设置view组件的左侧外边距
   */
  left?: number;
  /**
   * 用来设置view组件子组件沿主轴的对齐方式，
   * center为居中对齐，
   * start为居左或者居上对齐，
   * end为居右或者居下对齐，
   * between为居主轴两端对齐
   *
   */
  align?: "center" | "start" | "end" | "between";
  /**
   * 用来设置view组件中自组件沿交叉轴对齐方式，
   * center为居中对齐，
   * start为居左或者居上对齐，
   * end为居右或者居下对齐，
   * stretch为子组件撑满父容器交叉轴高度
   */
  alignItem?: "stretch" | "center" | "start" | "end";
  /**
   * 用来设置view组件的主轴方向，row为主轴方向为水平方向，column为主轴方向为垂直方向
   */
  direction?: "row" | "column";
  /**
   * 用来设置view组件的上方内边距
   */
  paddingTop?: number;
  /**
   * 用来设置view组件的下方那边距
   */
  paddingBottom?: number;
  /**
   * 用来设置view组件右方内边距
   */
  paddingRight?: number;
  /**
   * 用来设置view组件左方内边距
   */
  paddingLeft?: number;
  /**
   * 用来设置view组件边框样式，solid为展示实线，dashed为展示虚线
   */
  borderType?: "solid" | "dashed";
  /**
   * 用来设置view组件的边框颜色
   */
  borderColor?: string;
  /**
   * 用来设置view组件左边框大小
   */
  borderLeft?: number;
  /**
   * 用来设置view组件右边框大小
   */
  borderRight?: number;
  /**
   * 用来设置view组件上边框大小
   */
  borderTop?: number;
  /**
   * 用来设置view组件下边框大小
   */
  borderBottom?: number;
  /**
   * 用来设置view组件的背景颜色
   */
  background?: string;
}
const getAlign = (val: any) => {
  let value;
  switch (val) {
    case "stretch":
      value = "stretch";
      break;
    case "center":
      value = "center";
      break;
    case "start":
      value = "flex-start";
      break;
    case "end":
      value = "flex-end";
      break;
    case "between":
      value = "space-between";
      break;
    default:
      value = "start";
      break;
  }
  return value;
};
export const View: React.FC<Props> = React.memo(props => {
  const {
    onClick,
    children,
    height,
    top = 0,
    bottom,
    right,
    align,
    alignItem,
    left,
    width,
    direction = "row",
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
    paddingTop = 0,
    borderType = "solid",
    borderColor = "#EEEEEE",
    borderLeft,
    borderRight,
    borderTop,
    borderBottom,
    background,
    showBorder
  } = props;
  const justifyContent = getAlign(align);
  const alignItems = getAlign(alignItem);
  const styled: React.CSSProperties = {
    position: "relative",
    flexDirection: direction,
    height: height ? px2vw(height) : "100%",
    marginTop: px2vw(top),
    marginRight: right ? px2vw(right) : undefined,
    marginBottom: bottom ? px2vw(bottom) : undefined,
    justifyContent,
    alignItems,
    flex: height || width ? undefined : 1,
    width: width ? px2vw(width) : "100%",
    marginLeft: left ? px2vw(left) : "none",
    paddingBottom: px2vw(paddingBottom),
    paddingLeft: px2vw(paddingLeft),
    paddingRight: px2vw(paddingRight),
    paddingTop: px2vw(paddingTop),

    borderBottom: borderBottom
      ? `${borderColor} ${px2vw(borderBottom)} ${borderType}`
      : undefined,
    borderTop: borderTop
      ? `${borderColor} ${px2vw(borderTop)} ${borderType}`
      : undefined,
    borderLeft: borderLeft
      ? `${borderColor} ${px2vw(borderLeft)} ${borderType}`
      : undefined,
    borderRight: borderRight
      ? `${borderColor} ${px2vw(borderRight)} ${borderType}`
      : undefined,
    background: background ? background : undefined
    // border: showBorder ? `1px solid green` : undefined
  };
  const styleBoder: React.CSSProperties = {
    position: "absolute",
    border: showBorder ? `1px solid green` : undefined,
    width: `100%`,
    height: `100%`,
    top: 0,
    left: 0,
    zIndex: 0
  };
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick();
  };
  return (
    <div style={styled} className={styles.body} onClick={click}>
      {children}
      {showBorder ? <div style={styleBoder}></div> : null}
    </div>
  );
});
