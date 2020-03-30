import React from "react";
import styles from "./style.module.css";

type options = [
  { label: string | number; value: number | string },
  { label: string | number; value: number | string }
];

interface Props {
  value?: number | string;
  options?: options;
  onChange?: (value: number | string, options: any) => void;
}
export const Switch: React.FC<Props> = React.memo(props => {
  const { options = [], onChange } = props;
  const [left, right] = options;
  const createStyle: any = (value: any) => {
    const { value: currentValue } = props;
    if (value === currentValue) {
      return {
        background: "#576BA7",
        color: "#FFFFFF"
      };
    } else {
      return null;
    }
  };

  const leftClick = () => {
    const { options = [] } = props;
    const item = options[0];
    if (onChange && item) onChange(item.value, item);
  };
  const rightClick = () => {
    const { options = [] } = props;
    const item = options[1];
    if (onChange && item) onChange(item.value, item);
  };
  return (
    <div className={styles.body}>
      <div
        className={styles.item}
        style={createStyle(left && left.value)}
        onClick={leftClick}
      >
        {left && left.label}
      </div>
      <div
        className={styles.item}
        style={createStyle(right && right.value)}
        onClick={rightClick}
      >
        {right && right.label}
      </div>
    </div>
  );
});
