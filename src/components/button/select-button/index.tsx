import React from "react";
import styles from "./style.module.css";
import selectmodal from "./selectmodal.svg";
import select from "./select.svg";
import topp from "./triangle.svg";
import bottomm from "./triangleBottom.svg";
import { px2vw } from "../../util";

interface Props {
  type?: "triangle" | "round";
  open?: boolean;
  onClick?: () => void;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const SelectButton: React.FC<Props> = React.memo(props => {
  const {
    children,
    open = false,
    onClick,
    type = "round",
    top,
    bottom,
    left,
    right
  } = props;
  const style = {
    width: px2vw(12),
    height: px2vw(8),
    marginLeft: px2vw(14)
  };

  const stylebody: React.CSSProperties = {
    marginTop: top && px2vw(top),
    marginBottom: bottom && px2vw(bottom),
    marginLeft: left && px2vw(left),
    marginRight: right && px2vw(right),
    zIndex:999,
  };
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick();
  };
  return (
    <div className={styles.body} onClick={click} style={stylebody}>
      <div className={styles.content}>
        {children}
        {type === "round" ? (
          <img
            className={styles.img}
            alt="selectmodal"
            src={open ? select : selectmodal}
          ></img>
        ) : null}
        {type === "triangle" ? (
          <img
            style={style}
            alt="selectmodal"
            src={open ? topp : bottomm}
          ></img>
        ) : null}
      </div>
    </div>
  );
});
