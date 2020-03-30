import React from "react";
import styles from "./style.module.css";
import closebut from "./close.svg";
import { px2vw } from "../../util";

interface Props {
  height?: number;
  title?: string;
  onClose?: () => void;
}

export const BottomModal: React.FC<Props> = React.memo(props => {
  const { onClose, title, height = 540, children } = props;
  const style = {
    height: px2vw(height)
  };
  return (
    <div style={style} className={styles.body}>
      {onClose || title ? (
        <div className={styles.header}>
          {title}
          {onClose ? (
            <img
              className={styles.img}
              src={closebut}
              alt="关闭"
              onClick={onClose}
            />
          ) : (
            false
          )}
        </div>
      ) : (
        false
      )}
      {children}
    </div>
  );
});
