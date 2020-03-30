import React from "react";
import styles from "./style.module.css";
import selectmodal from "./selectmodal.svg";
import select from "./select.svg";
import top from "./triangle.svg";
import bottom from "./triangleBottom.svg";
import { px2vw } from "../../util";

interface Props {
  type?: "triangle" | "round";
  open?: boolean;
  onClick?: () => void;
}

export const SelectButton: React.FC<Props> = React.memo(props => {
  const { children, open = false, onClick, type = "round" } = props;
  const style = {
    width: px2vw(12),
    height: px2vw(8),
    marginLeft: px2vw(14)
  };
  return (
    <div className={styles.body} onClick={onClick}>
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
          <img style={style} alt="selectmodal" src={open ? top : bottom}></img>
        ) : null}
      </div>
    </div>
  );
});
