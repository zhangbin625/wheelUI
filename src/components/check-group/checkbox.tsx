import React, { PureComponent } from "react";
import { Check } from "../check";
import { ThemeContext } from "./group";

interface Props {
  value?: string | number;
}

export class CheckBox extends PureComponent<Props> {
  static contextType = ThemeContext;
  constructor(props: Props) {
    super(props);
  }

  private checkChange = (checked: any) => {
    const { value, onChange } = this.context;
    const { value: child } = this.props;
    const proxyArr = Object.assign([], value);
    if (checked) {
      proxyArr.push(child);
    } else {
      const address = proxyArr.indexOf(child);
      proxyArr.splice(address, 1);
    }
    if (onChange) onChange(child, proxyArr);
  };
  render() {
    const { value } = this.props;
    const { value: currentList, heignt, width, size } = this.context;
    const isCheck = currentList.includes(value);
    return (
      <Check
        size={size}
        height={heignt}
        width={width}
        isCheck={isCheck}
        onChange={this.checkChange}
      ></Check>
    );
  }
}
