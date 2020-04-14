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
   * 蓝色按钮点击事件
   */
  onOk?: () => void;
  /**
   * 白色按钮点击事件
   */
  onCancel?: () => void;
  /**
   * 白色按钮名字
   */
  leftName?: string;
  /**
   * 蓝色按钮名字
   */
  rightName?: string;
}

const BaseModal: React.FC<Props> = memo((props) => {
  const { children, onClose, visible, ...prop } = props;
  return (
    <MaskAllScreen visible={visible} onClick={onClose}>
      <BasicModal {...prop} showFooter={true} showTextButton={false}>
        {children}
      </BasicModal>
    </MaskAllScreen>
  );
});

export { BaseModal };
