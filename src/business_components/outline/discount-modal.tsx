import React, { memo } from "react";
import { RadioGroup, Radio } from "../../components/radio-group";
import { View } from "../../components/view";
import { Text } from "../../components/text";
import { BottomModal } from "../../components/synthesis-modal/bottom-modal";

interface Props {
  /**
   * 是否显示
   */
  visible: boolean;
  /**
   * 折扣列表
   */
  options?: Array<{ value: string | number; label: string }>;
  /**
   * 折扣value
   */
  value: string | number;
  /**
   * 切换折扣回调函数
   */
  onChange: (value: string) => void;
  /**
   * 点击黑色阴影关闭
   */
  onClose?: () => void;
}

const DiscountModal: React.FC<Props> = memo((props) => {
  const { options = [], onChange, value, visible, onClose } = props;
  return (
    <BottomModal visible={visible} title="选择折扣" onClose={onClose}>
      <RadioGroup value={value} onChange={onChange} size={36}>
        {options.map(({ value, label }) => (
          <View
            key={value}
            height={40}
            paddingLeft={30}
            alignItem="center"
            align="between"
            paddingRight={46}
            bottom={40}
          >
            <Text size={28} color="#252525">
              {label}
            </Text>
            <Radio value={value}></Radio>
          </View>
        ))}
      </RadioGroup>
    </BottomModal>
  );
});

export { DiscountModal };
