import React from "react";
import styles from "./style.module.css";
import { px2vw } from "../../util";
import classnames from "classnames";
interface Props {
  type?: "default" | "primary";
  onClick?: () => void;
  disabled?: boolean;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const LongButton: React.FC<Props> = React.memo((props) => {
  const {
    onClick,
    children,
    type = "default",
    disabled = false,
    top,
    bottom,
    left,
    right,
  } = props;
  const style: React.CSSProperties = {
    marginTop: top && px2vw(top),
    marginBottom: bottom && px2vw(bottom),
    marginLeft: left && px2vw(left),
    marginRight: right && px2vw(right),
  };
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick();
  };
  const disabledClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const { button, white, primary, primaryDisabled, whiteDisabled } = styles;
  const className = classnames({
    [button]: true,
    [white]: type === "default" && !disabled,
    [primary]: type === "primary" && !disabled,
    [primaryDisabled]: type === "primary" && disabled,
    [whiteDisabled]: type === "default" && disabled,
  });
  return (
    <div
      onClick={disabled ? disabledClick : click}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
});
