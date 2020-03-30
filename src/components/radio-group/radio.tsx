import React, { PureComponent } from "react";
import { Check } from "../check";
import { ThemeContext } from "./group";

interface Props {
  value?: string | number;
}

export class Radio extends PureComponent<Props> {
  static contextType = ThemeContext;
  constructor(props: Props) {
    super(props);
  }

  private RadioChange = () => {
    const { onChange } = this.context;
    const { value } = this.props;
    if (onChange) onChange(value);
  };
  render() {
    const { value } = this.props;
    const { value: currentValue, heignt, width, size } = this.context;
    const isCheck = currentValue === value;
    return (
      <Check
        size={size}
        height={heignt}
        width={width}
        isCheck={isCheck}
        onChange={this.RadioChange}
      ></Check>
    );
  }
}
