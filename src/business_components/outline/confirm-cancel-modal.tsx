import React from "react";
import { BaseModal } from "../../components/synthesis-modal";
import { Text } from "../../components/text";
import { Props as ModalProps } from "../../components/synthesis-modal/base-modal";
import { View } from "../../components/view";
interface Props extends ModalProps {
  /**
   * 提示信息
   */
  promptInformation?: string;
}

const ConfirmCancelModal: React.FC<Props> = React.memo((props) => {
  const { promptInformation, ...prop } = props;
  return (
    <BaseModal {...prop}>
      <View direction="column" align="center" alignItem="center">
        <Text size={30} weight="bold" color="#1D1F2B" height={42} width={600}>
          {promptInformation}
        </Text>
      </View>
    </BaseModal>
  );
});

export { ConfirmCancelModal };
