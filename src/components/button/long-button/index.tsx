import React from "react";
import styles from "./style.module.css";

interface Props {
  type?: "default" | "primary";
  onClick?: () => void;
  disabled?:boolean;
}

export const LongButton: React.FC<Props> = React.memo(props => {
  const { onClick, children, type = "default",disabled=false } = props;
  if(disabled) return (<div className={styles.disabled}>
    {children}
  </div>)
  let Elment = null;
  if (type === "primary") {
    Elment = (
      <div onClick={onClick} className={styles.primary}>
        {children}
      </div>
    );
  } else {
    Elment = (
      <div onClick={onClick} className={styles.default}>
        {children}
      </div>
    );
  }
  return <>{Elment}</>;
});
