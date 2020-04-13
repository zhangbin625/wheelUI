import React from "react";
import styled, { keyframes } from "styled-components";
import { px2vw } from "../util";

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`;
const LoadingWrapper = styled.div`
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: ${px2vw(60)};
    height: ${px2vw(60)};
    opacity: 0.6;
    border-radius: 50%;
    background-color: red;
    animation: ${loading} 1.4s infinite ease-in;
  }
  > div:nth-child(2) {
    animation-delay: -0.7s;
  }
  > span {
    position: absolute;
    left: 0;
    right: 0;
    top: ${px2vw(55)};
    text-align: center;
    font-size: ${px2vw(24)};
  }
`;
interface Props {}
const UpLoading: React.FC<Props> = React.memo((props) => {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
      <span>刷新中...</span>
    </LoadingWrapper>
  );
});

export { UpLoading };
