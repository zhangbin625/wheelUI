import React from "react";
import styles from "./style.module.css";

interface Props {}

export const BottomFrameInTab: React.FC<Props> = React.memo(props => {
  const { children } = props;
  return <div className={styles.body}>{children}</div>;
});
