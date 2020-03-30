import React from "react";
import { PureComponent } from "react";
import { IRootState } from "../../store/reducers";
import styles from "./style.module.css";
import { Header } from "components/header";
import { Text } from "../../components/text";
import { connect } from "react-redux";
import { add, currentuuidChange } from "./home.reducer";

interface Props extends iStateProps, iDispatchProps {}
interface State {}

export class Home extends PureComponent<Props, State> {
  private replace = (jjj: any, ob: any) => {
    const { currentuuid } = this.props;
    if (jjj.uuid === currentuuid) {
      jjj.children.push(ob);
    }
    const { children } = jjj;
    children.map((item: any) => {
      this.replace(item, ob);
    });
  };
  private onfocus = (i: number) => {
    const { currentuuidChange } = this.props;
    debugger;
    currentuuidChange(i);
  };
  private viewclick = () => {
    const { add, obj, tindex, currentuuid } = this.props;
    const ob = {
      uuid: tindex,
      type: "view",
      props: {
        tabIndex: tindex,
        currentuuid: currentuuid,
        onfocus: this.onfocus,
        showBorder: true
      },
      children: []
    };

    let jjj = JSON.parse(JSON.stringify(obj));
    this.replace(jjj, ob);
    debugger;
    add(jjj);
  };
  private focus = () => {
    const {} = this.props;
  };
  render() {
    const { obj } = this.props;
    return (
      <>
        <Header
          goBack={() => {
            console.log(1);
          }}
        >
          <Text color="#1D1F2B" size={32}>
            场间移动
          </Text>
        </Header>
      </>
    );
  }
}
type iStateProps = ReturnType<typeof mapState>;
type iDispatchProps = typeof mapDispatch;
const mapState = (state: IRootState) => {
  return {
    tindex: state.home.tindex,
    currentuuid: state.home.currentuuid,
    obj: state.home.obj
  };
};
const mapDispatch = {
  add,
  currentuuidChange
};

export default connect(mapState, mapDispatch)(Home);
