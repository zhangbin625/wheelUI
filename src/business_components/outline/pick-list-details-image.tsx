import React, { memo } from "react";
import { View } from "../../components/view";
import { Card } from "../../components/card";
import { Text } from "../../components/text";
import { Image } from "../../components/image";

interface Props {
  /**
   * 商品名称
   */
  goodsName?: string;
  /**
   * 商品条码
   */
  goodsBarCode?: string | number;
  /**
   * 可售库存
   */
  availableStock?: string | number;
  /**
   * 折扣信息
   */
  discountInformation?: string | number;
  /**
   * 领料信息
   */
  quantityMaterials?: string | number;
  /**
   * 图片路径
   */
  imageurl?: string;
  /**
   * 卡片上边距
   */
  top?: number;
  /**
   * 卡片下边距
   */
  bottom?: number;
}

const PickListDetailsImage: React.FC<Props> = memo((props) => {
  const {
    goodsBarCode,
    goodsName,
    availableStock,
    discountInformation,
    quantityMaterials,
    imageurl,
    ...cardProps
  } = props;
  return (
    <Card width={750} {...cardProps}>
      <View height={239} direction="row">
        <View width={189} align="center" paddingTop={20}>
          <Image height={138} width={138} url={imageurl}></Image>
        </View>
        <View direction="column" paddingTop={23}>
          <View height={86} bottom={14}>
            <Text height={86} width={504} lineNum={2} lineFeed lineHeight={42}>
              {goodsName}
            </Text>
          </View>
          <View height={40} alignItem="center">
            <Text color="#8A8A8A" size={24} width={252}>
              商品条码：{goodsBarCode}
            </Text>
            <Text color="#252525" size={26} width={135}>
              可售库存：
            </Text>
            <Text color="#252525" size={40} width={170}>
              {availableStock}
            </Text>
          </View>
          <View height={40} top={12}>
            <Text color="#252525" size={26} width={135}>
              折扣信息：
            </Text>
            <Text color="#252525" size={40} width={120}>
              {discountInformation}
            </Text>
            <Text color="#252525" size={26} width={135}>
              领料数量：
            </Text>
            <Text color="#252525" size={40} width={170}>
              {quantityMaterials}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
});

export { PickListDetailsImage };
