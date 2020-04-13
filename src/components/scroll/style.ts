import { px2vw } from './../util/index';
import styled from "styled-components";
export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PullDownLoading = styled.div`
  width: ${px2vw(750)};
  height: ${px2vw(80)};
  padding-top:${px2vw(80)};
  position:relative;
  z-index: 100;
`;

export const PullUpLoading = styled.div`
width: ${px2vw(750)};
padding-top:${px2vw(30)};
padding-bottom:${px2vw(80)};
height: ${px2vw(40)};
z-index: 100;
`;
