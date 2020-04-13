import React from "react";
import styled from "styled-components";
import { px2vw } from "../util";
interface Props {
  /**
   * 用来设置容器的上边距
   */
  top?: number;
  /**
   * 用来设置容器高度
   */
  height?: number;
  /**
   * 用来设置容器的上部内边距
   */
  paddingTop?: number;
  /**
   * 用来设置容器的下部内边距
   */
  paddingBottom?: number;
  /**
   * 用来设置容器的右部内边居
   */
  paddingRight?: number;
  /**
   * 用来设置容器的左侧内边居
   */
  paddingLeft?: number;
  /**
   * 显示容器外边框，用来给开发者查看容器范围
   */
  showBorder?: boolean;
  /**
   * 用来强制容器内容水平一行展示 超出部门滑动展示
   */
  level?: boolean;
  /**
   * 用来设置容器的背景颜色
   */
  background?: string;
}
const Containe = styled.div`
  overflow: hidden;
  height: ${({ height }: Props) => height && px2vw(height)};
  margin-top: ${({ top }) => top && px2vw(top)};
  padding-top: ${({ paddingTop }) => paddingTop && px2vw(paddingTop)};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom && px2vw(paddingBottom)};
  padding-right: ${({ paddingRight }) => paddingRight && px2vw(paddingRight)};
  padding-left: ${({ paddingLeft }) => paddingLeft && px2vw(paddingLeft)};
  border: ${({ showBorder }) => showBorder && `1px solid blue`};
  flex: auto 1;
  white-space: ${({ level }) => level && "nowrap"};
  background: ${({ background }) => background && background};
`;
export const Container: React.FC<Props> = React.memo(props => {
  const { children, ...prop } = props;

  return <Containe {...prop}>{children}</Containe>;
});
