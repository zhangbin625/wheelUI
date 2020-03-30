import React from "react";
import styles from "./style.module.css";

interface Props {
  /**
   * 
   */
  showFooter?: boolean;
  showClose?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  leftName?: string;
  rightName?: string;
  icon?: string;
}

interface BGProps {
  onOk?: () => void;
  onCancel?: () => void;
  leftName?: string;
  rightName?: string;
}

interface CloseProps {
  onCancel?: () => void;
}

const ButtonGrop: React.FC<BGProps> = React.memo(props => {
  const { onOk, onCancel, leftName = "取消", rightName = "确定" } = props;
  return (
    <div className={styles.buttonGroup}>
      <div onClick={onCancel} className={styles.left}>
        {leftName}
      </div>
      <div onClick={onOk} className={styles.right}>
        {rightName}
      </div>
    </div>
  );
});
const CloseBut: React.FC<CloseProps> = React.memo(props => {
  const { onCancel } = props;
  return (
    <div className={styles.close}>
      <div className={styles.closebut} onClick={onCancel}>
        关闭
      </div>
    </div>
  );
});

export const BasicModal: React.FC<Props> = React.memo(props => {
  const {
    onOk,
    onCancel,
    onClose,
    children,
    icon,
    leftName,
    rightName,
    showFooter = true,
    showClose = false
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.content}>
          {icon ? <img className={styles.img} src={icon}></img> : null}
          {children}
        </div>
        {showClose ? <CloseBut onCancel={onClose}></CloseBut> : null}

        {showFooter ? (
          <ButtonGrop
            onCancel={onCancel}
            onOk={onOk}
            leftName={leftName}
            rightName={rightName}
          ></ButtonGrop>
        ) : null}
      </div>
    </div>
  );
});
