import React from "react";
import styles from "./style.module.css";
import checked from "./checked.svg";
import nocheck from "./nocheck.svg";
import { px2vw } from "../util";

interface Props {
  value?: string | number;
  isCheck?: boolean;
  onChange?: (flag: any) => void;
  size?: number;
  height?: number;
  width?: number;
}

export const Check: React.FC<Props> = React.memo(props => {
  const { isCheck = false, onChange, size = 36, height, width } = props;
  const style = {
    width: px2vw(size),
    height: px2vw(size)
  };
  const body:React.CSSProperties = {
    height: height ? px2vw(height) : undefined,
    width: width ? px2vw(width) : undefined
  };
  const click = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (onChange) onChange(!isCheck);
  };
  return (
    <div style={body} className={styles.body} onClick={click}>
      <img style={style} src={isCheck ? checked : nocheck} alt="复选" />
    </div>
  );
});
