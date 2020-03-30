import React, { useState } from "react";
import { PickerView as PV } from "antd-mobile";
import { seasons } from "./pickerData";
import "./picker.css";

interface Props {
  value: Array<number | string>;
  onChange: (value: Array<number>) => void;
}

export const Picker: React.FC<Props> = React.memo(props => {
  const { value, onChange } = props;
  return (
    <PV
      prefixCls="prd"
      onChange={onChange}
      data={seasons}
      value={value}
      cascade={false}
    ></PV>
  );
});
