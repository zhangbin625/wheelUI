import React, { memo } from "react";
import { Card } from "../../components/card";
import { View } from "../../components/view";
import { Text } from "../../components/text";
import { BaseLine } from "../../components/baseline";
import { Image } from "../../components/image";
import { Absolute } from "../../components/absolute";
import { Radio } from "../../components/radio-group";
import arrow from "./arrow.svg";

interface Props {
  /**
   * 领料单编号
   */
  materialNumber?: string | number;
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
   * 领料单状态
   */
  status?: string;
  /**
   * 点击事件
   */
  onClick?: () => void;
  /**
   * 上边距
   */
  top?: number;
  /**
   * 下边距
   */
  bottom?: number;
}
const CheckboxPickCard: React.FC<Props> = memo((props) => {
  const {
    materialNumber,
    transferDepartment,
    transferredDepartment,
    creationTime,
    creator,
    status,
    onClick,
    top,
    bottom,
    children,
  } = props;
  return (
    <Card width={750} onClick={onClick} top={top} bottom={bottom}>
      <View height={250} direction="column">
        <View height={105} alignItem="center" paddingLeft={40}>
          {children ? (
            <>
              {children}
              <Text left={10} height={40} width={168} color="#1D1F2B" size={28}>
                领料单编号：
              </Text>
              <Text width={440} height={40} weight="bold" color="#374B74">
                {materialNumber}
              </Text>
              <Image height={24} width={9} url={arrow}></Image>
            </>
          ) : (
            <>
              <Text left={10} height={40} width={168} color="#1D1F2B" size={28}>
                领料单编号：
              </Text>
              <Text width={480} height={40} weight="bold" color="#374B74">
                {materialNumber}
              </Text>
              <Image height={24} width={9} url={arrow}></Image>
            </>
          )}
        </View>
        <BaseLine color="#EEEEEE" width={680}></BaseLine>
        <View direction="column">
          <View height={33} top={25} paddingLeft={40}>
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
      </View>
      {status ? (
        <Absolute bottom={0} right={0}>
          <Image width={149} height={98} url={status}></Image>
        </Absolute>
      ) : null}
    </Card>
  );
});

export { CheckboxPickCard };
