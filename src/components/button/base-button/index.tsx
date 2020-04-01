import React from "react";
import styles from "./style.module.css";
import { px2vw } from "../../util";

interface Props {
  type?: "default" | "primary";
  onClick?: () => void;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const Button: React.FC<Props> = React.memo(props => {
  const {
    type = "default",
    children,
    onClick,
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
  let Elment = null;
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick();
  };
  if (type === "primary") {
    Elment = (
      <div className={styles.primary} style={style} onClick={click}>
        {children}
      </div>
    );
  } else {
    Elment = (
      <div className={styles.default} style={style} onClick={click}>
        {children}
      </div>
    );
  }
  return <>{Elment}</>;
});
