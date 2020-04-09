import React from "react";
import { px2vw } from "../util";

interface Props {
  /**
   * 设置Image组件点击事件
   */
  onClick?: () => void;
  /**
   * 通过设置url,来指定展示哪张图片
   */
  url?: string;
  /**
   * 设置图片展示宽度
   */
  width?: number;
  /**
   * 设置图片展示高度
   */
  height?: number;
  /**
   * 设置图片上部外边距
   */
  top?: number;
  bottom?: number;
  /**
   * 设置图片左部外边距
   */
  left?: number;
  /**
   * 设置图片右部外边距
   */
  right?: number;
  /**
   * 设置图片组件边框的大小
   */
  border?: number;
  /**
   * 设置图片组件边框的颜色
   */
  borderColor?: string;
  /**
   * 设置图片组件边框的样式，solid为实线，dashed为虚线
   */
  borderType?: "solid" | "dashed";
}
export const Image: React.FC<Props> = React.memo(props => {
  const {
    url,
    width,
    height,
    top,
    left,
    right,
    onClick,
    border,
    bottom,
    borderColor = "#EEEEEE",
    borderType = "solid"
  } = props;
  const style: React.CSSProperties = {
    width: width ? px2vw(width) : undefined,
    height: height ? px2vw(height) : undefined
  };
  const stylebody: React.CSSProperties = {
    display: "inline-block",
    border: border
      ? `${px2vw(border)} ${borderColor} ${borderType} `
      : undefined,
    marginTop: top ? px2vw(top) : undefined,
    marginLeft: left ? px2vw(left) : undefined,
    marginRight: right ? px2vw(right) : undefined,
    marginBottom: bottom && px2vw(bottom)
  };
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(onClick){
      e.stopPropagation();
      onClick();
    }
  };
  return (
    <div style={stylebody}>
      <img src={url} alt="图片" style={style} onClick={click} />
    </div>
  );
});
