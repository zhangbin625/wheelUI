import React from "react";
import styles from "./style.module.css";

interface Props extends BGProps, CloseProps, TextProps {
  showTextButton?: boolean;
  showFooter?: boolean;
  showClose?: boolean;
  icon?: string;
}

interface BGProps {
  onOk?: () => void;
  onCancel?: () => void;
  leftName?: string;
  rightName?: string;
}

interface CloseProps {
  onClose?: () => void;
}

interface TextProps {
  textName?: string;
  onTextClick?: () => void;
}

const ButtonGrop: React.FC<BGProps> = React.memo((props) => {
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
const CloseBut: React.FC<CloseProps> = React.memo((props) => {
  const { onClose } = props;
  return (
    <div className={styles.close}>
      <div className={styles.closebut} onClick={onClose}>
        关闭
      </div>
    </div>
  );
});

const TextBut: React.FC<TextProps> = React.memo((props) => {
  const { textName = "确认", onTextClick } = props;
  return (
    <div className={styles.textButBody}>
      <div className={styles.textNameClass} onClick={onTextClick}>
        {textName}
      </div>
    </div>
  );
});

export const BasicModal: React.FC<Props> = React.memo((props) => {
  const {
    onOk,
    onCancel,
    onClose,
    children,
    icon,
    leftName,
    rightName,
    showFooter = true,
    showClose = false,
    showTextButton = false,
    onTextClick,
    textName,
  } = props;
  return (
    <div className={styles.content}>
      {icon ? <img className={styles.img} src={icon}></img> : null}
      {children}
      {showClose ? <CloseBut onClose={onClose}></CloseBut> : null}
      {showTextButton ? (
        <TextBut onTextClick={onTextClick} textName={textName}></TextBut>
      ) : null}
      {showFooter ? (
        <ButtonGrop
          onCancel={onCancel}
          onOk={onOk}
          leftName={leftName}
          rightName={rightName}
        ></ButtonGrop>
      ) : null}
    </div>
  );
});
