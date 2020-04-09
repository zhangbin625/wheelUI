import React from "react";
import styled from "styled-components";
import { px2vw } from "../util";

interface Props {
  bottom?: number;
  right?: number;
  height?: number;
  lineHeight?: number;
  showBorder?: boolean;
  textAlign?: "right" | "left" | "center";
  /**
   * 用来设置text组件的点击事件
   */
  onClick?: (e: any) => void;
  /**
   * 用来设置字体颜色
   */
  color?: string;
  /**
   * 用来设置字号大小
   */
  size?: number;
  /**
   * 用来设置text组件的上边距
   */
  top?: number;
  /**
   * 用来设置text组件的左边距
   */
  left?: number;
  /**
   * 用来设置字体加粗展示
   */
  weight?: number | "bold";
  /**
   * 用来设置text组件所占宽度，文字内容超过该宽度，默认展示三个点
   */
  width?: number;
  /**
   * 用来设置text组件的文字内容是否换行显示，默认在一行中展示
   */
  lineFeed?: boolean;
  /**
   * 用来设置text组件的文字内容展示几行，超过设置行数的内容将隐藏，展示三个点
   */
  lineNum?: number;
  /**
   * 用来设置text组件的文字内容展示样式，line-through为中划线，underline为下划线，overline为上划线
   */
  decoration?: "overline" | "underline" | "line-through";
  background?: string;
}

// const ContainerFeed = styled.div.attrs({
//   onClick: (props: any) => {
//     debugger;
//     return props.target.onclick || null;
//   }
// })`
//   margin-top: ${({ top }: Props) => top && px2vw(top)};
//   margin-bottom: ${({ bottom }) => bottom && px2vw(bottom)};
//   margin-left: ${({ left }) => left && px2vw(left)};
//   margin-right: ${({ right }) => right && px2vw(right)};
//   font-weight: ${({ weight }) => weight || null};
//   font-size: ${({ size }) => (size ? px2vw(size) : null)};
//   color: ${({ color }) => color || null};
//   width: ${({ width }) => width && px2vw(width)};
//   text-decoration: ${({ decoration }) => decoration || null};
//   text-align: ${({ textAlign }) => textAlign || null};
//   border: ${({ showBorder }) => showBorder && "1px solid #7B68EE"};
//   -webkit-line-clamp: ${({ lineNum }) => lineNum || null};
//   display: ${({ lineNum }) => (lineNum ? "-webkit-box" : "inline-block")};
//   line-height: ${({ height, lineHeight }) => {
//     if (!height && !lineHeight) {
//       return undefined;
//     } else if (height && !lineHeight) {
//       return px2vw(height);
//     } else if (lineHeight) {
//       return px2vw(lineHeight);
//     }
//   }};
//   height: ${({ height }) => height && px2vw(height)};
//   word-break: break-all;
//   text-overflow: ellipsis;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   white-space: ${({ lineFeed }) => (lineFeed ? "normal" : "nowrap")};
//   background: ${({ background }) => background || null};
// `;

export const Text: React.FC<Props> = React.memo(props => {
  const {
    children,
    onClick,
    textAlign,
    showBorder,
    top,
    bottom,
    left,
    right,
    weight,
    size,
    color,
    width,
    decoration,
    background,
    lineNum,
    height,
    lineFeed,
    lineHeight
  } = props;
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      e.stopPropagation();
      onClick(e);
    }
  };
  const style: React.CSSProperties = {
    marginTop: top && px2vw(top),
    marginBottom: bottom && px2vw(bottom),
    marginLeft: left && px2vw(left),
    marginRight: right && px2vw(right),
    fontWeight: weight || undefined,
    fontSize: size ? px2vw(size) : undefined,
    color: color || undefined,
    width: width && px2vw(width),
    textDecoration: decoration || undefined,
    textAlign: textAlign || undefined,
    border: showBorder ? "1px solid #7B68EE" : undefined,
    WebkitLineClamp: lineNum || undefined,
    display: lineNum ? "-webkit-box" : "inline-block",
    lineHeight:
      height && !lineHeight
        ? px2vw(height)
        : lineHeight
        ? px2vw(lineHeight)
        : undefined,
    height: height && px2vw(height),
    wordBreak: "break-all",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    whiteSpace: lineFeed ? "normal" : "nowrap",
    background: background || undefined,
    zIndex: 2
  };

  return (
    <div style={style} onClick={click}>
      {children}
    </div>
    // <ContainerFeed {...prop} onClick={click}>{children}</ContainerFeed>
  );
});
