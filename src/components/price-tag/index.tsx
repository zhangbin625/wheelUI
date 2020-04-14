import React from "react";
import { Image } from "../image";
import bing from "./bind.svg";
import unbing from "./unbing.svg";
import { ButtonWrapper } from "./style";
import { View } from "../view";

interface Props {
  type?: "bind" | "unbind";
  onClick?: () => void;
  top?: number;
  bottom?: number;
}
const PriceTagButton: React.FC<Props> = React.memo((props) => {
  const { type = "bind", onClick, ...prop } = props;
  return (
    <View {...prop} height={278} alignItem="center" align="center">
      <ButtonWrapper type={type}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span onClick={onClick}>
          <Image
            bottom={8}
            height={95}
            width={95}
            url={type === "bind" ? bing : unbing}
          ></Image>
          {type === "bind" ? "价签绑定" : "价签解绑"}
        </span>
      </ButtonWrapper>
    </View>
  );
});

export { PriceTagButton };
