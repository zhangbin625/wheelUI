import React from "react";
export const ThemeContext = React.createContext({});

interface Props {
  value: string | number;
  onChange: (value: any, list: any) => void;
  height?: number;
  width?: number;
  size?: number;
}
export const RadioGroup: React.FC<Props> = React.memo(props => {
  const { value, children, onChange, height, width, size } = props;
  const current = {
    value,
    onChange,
    size,
    width,
    height
  };
  return (
    <ThemeContext.Provider value={current}>{children}</ThemeContext.Provider>
  );
});
