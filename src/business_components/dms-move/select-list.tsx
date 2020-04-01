import React from "react";
import { Card } from "../../components/card";
import { View } from "../../components/view";
import { Text } from "../../components/text";
import sm1 from "./sm1.svg";
import { Image } from "../../components/image";
import { Input } from "../../components/input";

interface Props {
  name?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  onClick?: () => void;
  onSubmit?: (value: any) => void;
  top?: number;
  bottom?: number;
}
export const Selectlist: React.FC<Props> = React.memo(props => {
  const {
    name = "商品条码",
    value,
    onClick,
    top = 0,
    bottom = 0,
    onChange,
    onSubmit
  } = props;
  return (
    <Card width={750} top={top} bottom={bottom}>
      <View height={100} alignItem="center" paddingLeft={29}>
        <Text color="#252525" size={28}>
          {name}
        </Text>
        <Input
          onSubmit={onSubmit}
          left={28}
          value={value}
          onChange={onChange}
        ></Input>
        <View alignItem="center" align="end" paddingRight={30}>
          <Image width={38} height={38} url={sm1} onClick={onClick} />
        </View>
      </View>
    </Card>
  );
});
