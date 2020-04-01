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
  bottom?: number;
  right?: number;
}
export const ColorCard: React.FC<Props> = React.memo(props => {
  const {
    children,
    startColor = "#FFFFFF",
    endColor = "#FFFFFF",
    onClick,
    left,
    top,
    right,
    bottom
  } = props;

  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick();
  };
  const style: React.CSSProperties = {
    marginBottom: bottom && px2vw(bottom),
    marginRight: right && px2vw(right),
    marginTop: top ? px2vw(top) : undefined,
    marginLeft: left ? px2vw(left) : undefined,
    background: `linear-gradient(43deg,  ${startColor} 0%, ${endColor} 100%)`
  };
  return (
    <div className={styles.body} style={style} onClick={click}>
      <img className={styles.img} src={root} alt="路线"></img>
      {children}
    </div>
  );
});
