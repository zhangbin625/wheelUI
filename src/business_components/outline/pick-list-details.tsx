import React, { memo } from "react";
import { Card } from "../../components/card";
import { View } from "../../components/view";
import { Text } from "../../components/text";
import { BaseLine } from "../../components/baseline";
import { Image } from "../../components/image";
import { Absolute } from "../../components/absolute";

interface Props {
  /**
   * 调入部门
   */
  transferredDepartment?: string;
  /**
   * 调出部门
   */
  transferDepartment?: string;
  /**
   * 创建时间
   */
  creationTime?: string;
  /**
   * 创建人
   */
  creator?: string;
  /**
   * 上边距
   */
  top?: number;
  /**
   * 下边距
   */
  bottom?: number;
}

const PickListDetails: React.FC<Props> = memo((props) => {
  const {
    transferredDepartment,
    transferDepartment,
    creationTime,
    creator,
    top,
    bottom,
  } = props;
  return (
    <Card width={750} top={top} bottom={bottom}>
      <View direction="column" height={161}>
        <View height={33} top={36} paddingLeft={40}>
          <Text width={120} height={33} size={24} color="#8A8A8A">
            调入部门：
          </Text>
          <Text size={24} width={240} color="#252525">
            {transferredDepartment}
          </Text>
          <Text width={120} height={33} size={24} color="#8A8A8A">
            调出部门：
          </Text>
          <Text size={24} width={200} color="#252525">
            {transferDepartment}
          </Text>
        </View>
        <View height={33} top={18} paddingLeft={40}>
          <Text width={120} height={33} size={24} color="#8A8A8A">
            创建时间：
          </Text>
          <Text size={24} width={240} color="#252525">
            {creationTime}
          </Text>
          <Text width={120} height={33} size={24} color="#8A8A8A">
            创建人：
          </Text>
          <Text size={24} width={200} color="#252525">
            {creator}
          </Text>
        </View>
      </View>
    </Card>
  );
});

export { PickListDetails };
