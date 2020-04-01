import React from "react";
import styles from "./style.module.css";
import { px2vw } from "../../util";
interface Props {
  type?: "default" | "primary";
  onClick?: () => void;
  disabled?: boolean;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const LongButton: React.FC<Props> = React.memo(props => {
  const {
    onClick,
    children,
    type = "default",
    disabled = false,
    top,
    bottom,
    left,
    right
  } = props;
  const style: React.CSSProperties = {
    marginTop: top && px2vw(top),
    marginBottom: bottom && px2vw(bottom),
    marginLeft: left && px2vw(left),
    marginRight: right && px2vw(right)
  };
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick();
  };
  const disabledClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  if (disabled)
    return (
      <div className={styles.disabled} onClick={disabledClick}>
        {children}
      </div>
    );
  let Elment = null;
  if (type === "primary") {
    Elment = (
      <div onClick={click} className={styles.primary} style={style}>
        {children}
      </div>
    );
  } else {
    Elment = (
      <div onClick={click} className={styles.default} style={style}>
        {children}
      </div>
    );
  }
  return <>{Elment}</>;
});
