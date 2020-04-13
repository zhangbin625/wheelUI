import React from "react";
import styles from "./styles.module.css";
import { px2vw } from "../../util";
import arrow from "./rightArrow.svg";

interface Props {
  /**
   * 用来设置卡片的单机事件
   */
  onClick?: () => void;
  /**
   * 用来设置卡片的上边距
   */
  top?: number;
  bottom?: number;
  /**
   * 用来设置卡片的宽度
   */
  width?: number;
  /**
   * 用来设置卡片的上侧内边距
   */
  paddingTop?: number;
  /**
   * 用来设置卡片的下侧内边距
   */
  paddingBottom?: number;
  /**
   * 用来设置卡片的右侧内边居
   */
  paddingRight?: number;
  /**
   * 用来设置卡片的左侧内边距
   */
  paddingLeft?: number;
  /**
   * 用来设置卡片的对齐方式，center居中展示，left居左展示，right居右展示
   */
  align?: "center" | "left" | "right";
  /**
   * 用来设置边框的边界半径
   */
  radius?: number;
  /**
   * 用来设置卡片边框的大小
   */
  border?: number;
  /**
   * 用来设置卡片的边框颜色
   */
  borderColor?: string;
  /**
   * 用来设置边框样式，solid为实线，dashed为虚线
   */
  borderType?: "solid" | "dashed";
}

export const Card: React.FC<Props> = React.memo((props) => {
  const {
    onClick,
    top,
    children,
    width = 700,
    align,
    paddingBottom = 0,
    paddingLeft = 0,
    paddingRight = 0,
    paddingTop = 0,
    radius = 20,
    border,
    borderColor = "#EEEEEE",
    borderType = "solid",
    bottom,
  } = props;
  let justifyContent;
  switch (align) {
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
  const styled = {
    marginTop: top && px2vw(top),
    marginBottom: bottom && px2vw(bottom),
    justifyContent,
  };

  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick();
  };

  const content: React.CSSProperties = {
    width: px2vw(width),
    paddingBottom: px2vw(paddingBottom),
    paddingLeft: px2vw(paddingLeft),
    paddingRight: px2vw(paddingRight),
    paddingTop: px2vw(paddingTop),
    borderRadius: px2vw(radius),
    borderBottom: border
      ? `${px2vw(border)} ${borderColor} ${borderType} `
      : undefined,
    borderTop: border
      ? `${px2vw(border)} ${borderColor} ${borderType} `
      : undefined,
  };

  return (
    <div style={styled} className={styles.body}>
      <div style={content} className={styles.content} onClick={click}>
        {children}
      </div>
    </div>
  );
});
