import React, { PureComponent, useState } from "react";
import styles from "./style.module.css";
import ReactDOM from "react-dom";

interface Props {
  /**
   * 用来设置阴影组件展示（true）或者隐藏（false）
   */
  visible?: boolean;
  /**
   * 设置阴影组件阴影展示区域的点击事件
   */
  onClick?: () => void;
}

export const Mask: React.FC<Props> = React.memo(props => {
  const { onClick = () => {}, children, visible = false } = props;
  const preventClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  if (!visible) return null;
  return (
    <div className={styles.body} onClick={onClick}>
      <div className={styles.content}>
        <div onClick={e => preventClick(e)}>{children}</div>
      </div>
    </div>
  );
});

export class Bottom extends PureComponent<Props> {
  state = {
    el: document.createElement("div")
  };
  componentDidMount() {
    const container = document.getElementById("root");
    container && container.appendChild(this.state.el);
  }
  componentWillUnmount() {
    const container = document.getElementById("root");
    container && container.removeChild(this.state.el);
  }

  render() {
    const { el } = this.state;
    const { props } = this;
    return ReactDOM.createPortal(<Mask {...props}></Mask>, el);
  }
}

export const MaskAllScreen: React.FC<Props> = React.memo(props => {
  const { visible = false } = props;
  if (visible) {
    return <Bottom {...props}></Bottom>;
  } else {
    return null;
  }
});
