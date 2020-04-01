import React from "react";
import { Card } from "../../components/card";
import { View } from "../../components/view";
import { Text } from "../../components/text";
import sm1 from "./sm1.svg";
import { Image } from "../../components/image";
import { Input } from "../../components/input";
import { BaseLine } from "../../components/baseline";
import { SelectButton } from "../../components/button";

interface Props {
  top?: number;
  bottom?: number;
  sourceStoreHouseOpen?: boolean;
  sourceStoreHouse?: string | number;
  sourceStoreHouseChange?: (value: string | number) => void;
  sourceStoreHouseSelectButtonClick?: () => void;
  sourceStoreHouseScanning?: () => void;
  sourceStoreHouseOnSubmit?: () => void;
  targetStoreHouseOpen?: boolean;
  targetStoreHouse?: string | number;
  targetStoreHouseChange?: (value: string | number) => void;
  targetStoreHouseSelectButtonClick?: () => void;
  targetStoreHouseScanning?: () => void;
  targetStoreHouseOnSubmit?: () => void;
}
export const SourceTargetStoreHouse: React.FC<Props> = React.memo(props => {
  const {
    targetStoreHouseOpen,
    targetStoreHouse,
    targetStoreHouseChange,
    targetStoreHouseSelectButtonClick,
    targetStoreHouseScanning,
    targetStoreHouseOnSubmit,
    sourceStoreHouseScanning,
    sourceStoreHouseSelectButtonClick,
    sourceStoreHouseOnSubmit,
    sourceStoreHouseChange,
    sourceStoreHouse,
    sourceStoreHouseOpen,
    top,
    bottom
  } = props;
  return (
    <Card width={750} top={top} bottom={bottom}>
      <View height={100} paddingLeft={29} paddingRight={30} alignItem="center">
        <Text right={27} height={40} color="#252525" size={28}>
          来源库位
        </Text>
        <SelectButton
          open={sourceStoreHouseOpen}
          onClick={sourceStoreHouseSelectButtonClick}
        >
          <Input
            onSubmit={sourceStoreHouseOnSubmit}
            value={sourceStoreHouse}
            onChange={sourceStoreHouseChange}
            width={224}
            placeholder="请扫描或输入库位"
          ></Input>
        </SelectButton>
        <View alignItem="center" align="end">
          <Image
            url={sm1}
            height={38}
            width={38}
            onClick={sourceStoreHouseScanning}
          ></Image>
        </View>
      </View>
      <BaseLine width={690}></BaseLine>

      <View height={100} paddingLeft={29} paddingRight={30} alignItem="center">
        <Text right={27} height={40} color="#252525" size={28}>
          目标库位
        </Text>
        <SelectButton
          open={targetStoreHouseOpen}
          onClick={targetStoreHouseSelectButtonClick}
        >
          <Input
            onSubmit={targetStoreHouseOnSubmit}
            value={targetStoreHouse}
            onChange={targetStoreHouseChange}
            width={224}
            placeholder="请扫描或输入库位"
          ></Input>
        </SelectButton>
        <View alignItem="center" align="end">
          <Image
            url={sm1}
            height={38}
            width={38}
            onClick={targetStoreHouseScanning}
          ></Image>
        </View>
      </View>
    </Card>
  );
});
