import React from "react";
import root from "./lujing.svg";
import styles from "./style.module.css";
import { px2vw } from "../../util";

interface Props {
  /**
   * 用来设置卡片起始颜色
   */
  startColor?: string;
  /**
   * 用来设置卡片结束颜色
   */
  endColor?: string;
  /**
   * 用来设置卡片单机事件
   */
  onClick?: () => void;
  left?: number;
  top?: number;
}
export const ColorCard: React.FC<Props> = React.memo(props => {
  const {
    children,
    startColor = "#FFFFFF",
    endColor = "#FFFFFF",
    onClick,
    left,
    top
  } = props;
  const style: React.CSSProperties = {
    marginTop: top ? px2vw(top) : undefined,
    marginLeft: left ? px2vw(left) : undefined,
    background: `linear-gradient(43deg,  ${startColor} 0%, ${endColor} 100%)`
  };
  return (
    <div className={styles.body} style={style} onClick={onClick}>
      <img className={styles.img} src={root} alt="路线"></img>
      {children}
    </div>
  );
});
