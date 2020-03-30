import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router";
import { hot } from "react-hot-loader/root";
import "./App.css"
interface Props {}
interface State {}
class App extends PureComponent<Props, State> {
  render() {
    const { children } = this.props;
    return (
      <div
        className={`App ${
          typeof window !== "undefined" &&
          window &&
          /iphone/gi.test(window.navigator.userAgent) &&
          window.screen.height >= 812
            ? "iPhoneX"
            : ""
        }`}
      >
        {children}
      </div>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
