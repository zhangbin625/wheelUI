import React from "react";
import { Image } from "../../components/image";
import scaning from "./scaning.svg";
import { View } from "../../components/view";
import styled, { keyframes } from "styled-components";
import { px2vw } from "../../components/util";

interface Props {
  onClick?: () => void;
  top?: number;
  bottom?: number;
}

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
  75% {
    transform: scale(1.0);
  }
`;

const ButtonWrapper = styled.div`
   {
    width: ${px2vw(278)};
    height: ${px2vw(278)};
    position: relative;
  }
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: ${px2vw(150)};
    height: ${px2vw(150)};
    opacity: 0.6;
    border-radius: 50%;
    background: linear-gradient(
      179deg,
      rgba(81, 121, 202, 1) 0%,
      rgba(26, 56, 151, 1) 100%
    );
    box-shadow: 0px 12px 30px -10px rgba(39, 83, 222, 0.5);
    opacity: 0.1054;
    animation: ${loading} 1.5s infinite ease-in;
  }
  > div:nth-child(2) {
    animation-delay: -0.5s;
  }
  > div:nth-child(3) {
    animation-delay: -0.7s;
  }
  > div:nth-child(4) {
    animation-delay: -0.9s;
  }
  > span {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    background: red;
    font-size: ${px2vw(28)};
    color: #ffffff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${px2vw(140)};
    height: ${px2vw(140)};
    background: linear-gradient(
      90deg,
      rgba(89, 109, 170, 1) 0%,
      rgba(45, 61, 112, 1) 100%
    );
  }

  > span:active {
    color: rgba(255, 255, 255, 0.3);
    background: linear-gradient(
      90deg,
      rgba(89, 109, 170, 0.9) 0%,
      rgba(45, 61, 112, 0.9) 100%
    );
  }
`;

const ScanGoods: React.FC<Props> = React.memo((props) => {
  const { onClick, ...prop } = props;
  return (
    <View {...prop} height={140} alignItem="center" align="center">
      <ButtonWrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span onClick={onClick}>
          <Image bottom={9} height={44} width={44} url={scaning}></Image>
          扫商品
        </span>
      </ButtonWrapper>
    </View>
  );
});

export { ScanGoods };
