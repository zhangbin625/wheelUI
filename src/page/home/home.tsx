import React from "react";
import { PureComponent } from "react";
import { IRootState } from "../../store/reducers";
import styles from "./style.module.css";
import { Header } from "components/header";
import { Input } from "../../components/input";
import { Text } from "../../components/text";
import { connect } from "react-redux";
import { add, currentuuidChange } from "./home.reducer";
import { Wrap } from "../../components/wrap";
import { View } from "../../components/view";
import { SelectButton, Background } from "../../components/button";
import { Card } from "../../components/card";
import sm1 from "./sm1.svg";
import { Image } from "../../components/image";
import { BaseLine } from "../../components/baseline";
import { MaskAllScreen } from "../../components/mask-all-screen";
import { BasicModal } from "../../components/modal";

interface Props extends iStateProps, iDispatchProps {}
interface State {
  value: string | number;
  value1: string | number;
}

export class Home extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: "GS01-01",
      value1: ""
    };
  }
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
        <Wrap reduceHeight={13}>
          <MaskAllScreen visible={true}>
            <BasicModal>
              <View align="center">
                <Text
                  height={120}
                  lineHeight={60}
                  textAlign="center"
                  lineFeed={true}
                  width={420}
                  lineNum={2}
                  color="#1D1F2B"
                  size={30}
                >
                  继续返回将清空还未生成损溢单 是否继续？
                </Text>
              </View>
            </BasicModal>
          </MaskAllScreen>
          <Card width={750} top={30}>
            <View
              height={100}
              paddingLeft={29}
              paddingRight={30}
              alignItem="center"
            >
              <Text right={27} height={40} color="#252525" size={28}>
                来源库位
              </Text>
              <SelectButton
                onClick={() => {
                  console.log(1);
                }}
              >
                <Input
                  onSubmit={() => {
                    console.log(3);
                  }}
                  onChange={value => {
                    this.setState({ value });
                  }}
                  value={this.state.value}
                  width={224}
                  placeholder="请扫描或输入枯萎"
                ></Input>
              </SelectButton>
              <View alignItem="center" align="end">
                <Image url={sm1} height={38} width={38}></Image>
              </View>
            </View>
            <BaseLine width={690}></BaseLine>

            <View
              height={100}
              paddingLeft={29}
              paddingRight={30}
              alignItem="center"
            >
              <Text right={27} height={40} color="#252525" size={28}>
                目标库位
              </Text>
              <SelectButton
                onClick={() => {
                  console.log(1);
                }}
              >
                <Input
                  onSubmit={() => {
                    console.log(3);
                  }}
                  onChange={value => {
                    this.setState({ value });
                  }}
                  value={this.state.value1}
                  width={224}
                  placeholder="请扫描或输入库位"
                ></Input>
              </SelectButton>
              <View alignItem="center" align="end">
                <Image url={sm1} height={38} width={38}></Image>
              </View>
            </View>
            <BaseLine width={690}></BaseLine>

            <View
              height={100}
              paddingLeft={29}
              paddingRight={30}
              alignItem="center"
            >
              <Text right={27} height={40} color="#252525" size={28}>
                可移动库存量
              </Text>
              <View alignItem="center" align="end">
                <Text color="#1D1F2B" size={30}>
                  20
                </Text>
              </View>
            </View>
          </Card>
        </Wrap>
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
