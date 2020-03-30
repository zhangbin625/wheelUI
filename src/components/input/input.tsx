import React from "react";
import { px2vw } from "../util";
interface Props {
  onSubmit?: (value: any) => void;
  showBorder?: boolean;
  placeholder?: string | undefined;
  value?: string | number | undefined;
  onChange?: (value: any) => void;
  disabled?: boolean | undefined;
  readOnly?: boolean | undefined;
  height?: number;
  width?: number;
  color?: string;
  fontSize?: number;
}
export const Input: React.FC<Props> = React.memo((props: Props) => {
  const {
    onSubmit,
    onChange,
    showBorder = false,
    fontSize = 28,
    color = "#000000",
    height = 40,
    width,
    ...baseProps
  } = props;
  const style: React.CSSProperties = {
    border: showBorder ? `1px solid red` : "none",
    outline: "none",
    color: color,
    fontSize: fontSize && px2vw(fontSize),
    height: height && px2vw(height),
    width: width && px2vw(width)
  };
  const onblur = () => {
    window.scroll(0, 1);
  };
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };
  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && onSubmit) onSubmit((e.target as any).value);
  };
  return (
    <input
      onKeyDown={keyDown}
      onChange={change}
      onBlur={onblur}
      style={style}
      {...baseProps}
    ></input>
  );
});
