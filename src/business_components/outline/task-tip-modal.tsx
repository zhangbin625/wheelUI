import React from "react";
import { MessageModal } from "../../components/synthesis-modal";
import { Text } from "../../components/text";
import { Props as ModalProps } from "../../components/synthesis-modal/message-modal";
import { View } from "../../components/view";
interface Props extends ModalProps {
  /**
   * 提示信息
   */
  promptInformation?: string;
}

const TaskTipModal: React.FC<Props> = React.memo((props) => {
  const { promptInformation, ...prop } = props;
  return (
    <MessageModal {...prop}>
      <View direction="column" align="center" alignItem="center">
        <Text
          lineNum={2}
          lineFeed={true}
          size={32}
          color="#1D1F2B"
          lineHeight={50}
          height={105}
          width={320}
        >
          {promptInformation}
        </Text>
      </View>
    </MessageModal>
  );
});

export { TaskTipModal };
