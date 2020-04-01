import React from "react";
import { Card } from "../../components/card";
import { View } from "../../components/view";
import { Text } from "../../components/text";
import arrow from "./arrow.svg";
import { Image } from "../../components/image";

interface Props {
  name?: string;
  value?: string | number;
  onClick?: () => void;
  top?: number;
  bottom?: number;
}
export const ScanningList: React.FC<Props> = React.memo(props => {
  const {
    name = "移动类型",
    value = "场间移动",
    onClick,
    top = 0,
    bottom = 0
  } = props;
  return (
    <Card width={750} top={top} bottom={bottom} onClick={onClick}>
      <View height={100} alignItem="center" paddingLeft={29}>
        <Text color="#252525" size={28}>
          {name}
        </Text>
        <Text left={28} color="#000000" size={28}>
          {value}
        </Text>
        <View alignItem="center" align="end" paddingRight={30}>
          <Image width={9} height={24} url={arrow} />
        </View>
      </View>
    </Card>
  );
});
