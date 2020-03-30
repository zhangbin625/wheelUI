import React from "react";
import styles from "./style.module.css";
import { px2vw } from "../util";

interface Props {
  /**
   * 设置阴影组件的上边距离
   */
  top?: number;
  /**
   * 用来设置阴影组件展示（true）或者隐藏（false）
   */
  isShow?: boolean;
  /**
   * 用来设置阴影组件阴影显示区域的点击事件
   */
  onClick?: () => void;
}

export const Mask: React.FC<Props> = React.memo(props => {
  const { top = 0, onClick = () => {}, children, isShow = false } = props;
  const style = {
    marginTop: px2vw(top)
  };

  const preventClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  if (!isShow) return null;
  return (
    <div style={style} className={styles.body} onClick={onClick}>
      <div onClick={e => preventClick(e)}>{children}</div>
    </div>
  );
});
