import React from "react";
import { PickerView as PV } from "antd-mobile";
import "./style.css";

type option = {
  label: any;
  value: number | string;
};
interface Props {
  options?: Array<option>;
  value?: Array<string | number>;
  onChange?: (e: any) => void;
}

export const ListPicker: React.FC<Props> = React.memo(props => {
  const { options = [], value = [], onChange } = props;
  return (
    <PV
      value={value}
      prefixCls="list-picker"
      data={options}
      cascade={false}
      onChange={onChange}
    ></PV>
  );
});
