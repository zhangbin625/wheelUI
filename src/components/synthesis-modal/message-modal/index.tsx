import React, { memo } from "react";
import { MaskAllScreen } from "../../mask-all-screen";
import { BasicModal } from "../../modal";

export interface Props {
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 点击阴影关闭
   */
  onClose?: () => void;
  /**
   * text按钮点击事件
   */
  onTextClick?: () => void;
  /**
   * text按钮显示文字
   */
  textName?: string;
}

const MessageModal: React.FC<Props> = memo((props) => {
  const { visible, children, onClose, ...prop } = props;
  return (
    <MaskAllScreen visible={visible} onClick={onClose}>
      <BasicModal showFooter={false} showTextButton={true} {...prop}>
        {children}
      </BasicModal>
    </MaskAllScreen>
  );
});

export { MessageModal };
