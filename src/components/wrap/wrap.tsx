import React from "react";
import styled from "styled-components";
import { px2vw } from "../util";
interface Props {
  /**
   * 设置容器warp组件的上边距
   */
  top?: number;
  /**
   * 默认容器组件高度为设备高度,通过设置差值reduceHeight来调节容器高度
   */
  reduceHeight?: number;
  /**
   * 显示容器外边框，用来给开发者查看容器范围
   */
  showBorder?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const Container = styled.div`
  overflow: hidden;
  height: calc(100vh - ${({ reduceHeight }: Props) => reduceHeight || 0}vw);
  margin-top: ${({ top }) => top && px2vw(top)};
  border: ${({ showBorder }) => (showBorder ? `1px solid red` : null)};
  width: ${props => px2vw(750)};
  padding-top: ${({ paddingTop }) => paddingTop && px2vw(paddingTop)};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom && px2vw(paddingBottom)};
  padding-right: ${({ paddingRight }) => paddingRight && px2vw(paddingRight)};
  padding-left: ${({ paddingLeft }) => paddingLeft && px2vw(paddingLeft)};
`;
export const Wrap: React.FC<Props> = React.memo(props => {
  const { children, ...prop } = props;

  return <Container {...prop}>{children}</Container>;
});
