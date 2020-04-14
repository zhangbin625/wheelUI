import React from "react";
import { View } from "../../components/view";
import binding from "./bingding.svg";
import { Image } from "../../components/image";

interface Props {
  onClick?: () => void;
  top?: number;
  bottom?: number;
}

const PriceTagBinding: React.FC<Props> = React.memo((props) => {
  const { onClick, ...prop } = props;
  return (
    <View {...prop} height={278} align="center" alignItem="center">
      <Image onClick={onClick} url={binding} height={278} width={278}></Image>
    </View>
  );
});

export { PriceTagBinding };
