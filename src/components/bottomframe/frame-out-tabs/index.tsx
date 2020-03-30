import React,{PureComponent} from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.css";

interface Props {}

export const Frame: React.FC<Props> = React.memo(props => {
  const { children } = props;
  return <div className={styles.body}>{children}</div>;
});


export class BottomFrame extends PureComponent<Props> {
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
    const { children } = this.props;
    return ReactDOM.createPortal(
      <div className={styles.container}>
        <div className={styles.boddy}>
          <Frame>{children}</Frame>
        </div>
      </div>,
      el
    );
  }
}

