import React, { memo } from "react";
import { MaskAllScreen } from "../../mask-all-screen";
import { BottomModal as Modal } from "../../modal/bottom-modal";
import { Scroll } from "../../scroll";
import { Container } from "../../container";

interface Props {
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 弹框高度
   */
  modalHeight?: number;
  /**
   * 可滑动容器高度
   */
  containerHeight?: number;
  /**
   * 是否展示可滚动容器边框
   */
  containerShowboder?: boolean;
  /**
   * 点击阴影关闭
   */
  onClose?: () => void;
}

const BottomModal: React.FC<Props> = memo((props) => {
  const { visible, title, children, onClose } = props;
  return (
    <MaskAllScreen visible={visible} onClick={onClose}>
      <Modal height={440} title={title}>
        <Container height={320} paddingBottom={40}>
          <Scroll>
            <div>{children}</div>
          </Scroll>
        </Container>
      </Modal>
    </MaskAllScreen>
  );
});

export { BottomModal };
