import React from "react";
import { PureComponent } from "react";
import { IRootState } from "../../store/reducers";
import styles from "./style.module.css";
import { forceCheck } from "react-lazyload";
import { Header } from "components/header";
import { Input } from "../../components/input";
import { Text } from "../../components/text";
import { connect } from "react-redux";
import { add, currentuuidChange } from "./home.reducer";
import { Wrap } from "../../components/wrap";
import { View } from "../../components/view";
import { Scroll } from "../../components/scroll";
import styled from "styled-components";
import dll from "./dll.svg";
import "./style.css";
import {
  SelectButton,
  Background,
  LongButton,
  Button,
} from "../../components/button";
import { Card } from "../../components/card";
import sm1 from "./sm1.svg";
import { Image } from "../../components/image";
import { BaseLine } from "../../components/baseline";
import { MaskAllScreen } from "../../components/mask-all-screen";
import { BasicModal } from "../../components/modal";
import Slider from "../../components/slider/slider";
import TransitionGroup from "react-addons-css-transition-group";
import {
  ScanningList,
  Selectlist,
  StoreHouse,
  SourceTargetStoreHouse,
  DefaultStoreHouse,
} from "../../business_components/dms-move";
import { PickCard } from "../../business_components/outline/pick-card";
import { PickListDetails } from "../../business_components/outline/pick-list-details";
import { DiscountModal } from "../../business_components/outline/discount-modal";
import { Container } from "../../components/container";
interface Props extends iStateProps, iDispatchProps {}
interface State {
  value: string | number;
  value1: string | number;
}

const Content = styled.div`
  position: fixed;
  top: 94px;
  left: 0;
  bottom: 60px;
  width: 100%;
`;
export class Home extends PureComponent<Props> {
  state = {
    value: "GS01-01",
    value1: "",
    selectValue: 10110110,
    flag: false,
    downFlag: false,
    storehose: "",
    targethose: "",
    check: false,
    list: [1, 2, 3, 4, 5],
    bannerList: [1, 2, 3, 4].map((item) => {
      return {
        imageUrl:
          "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
      };
    }),
  };
  private pullDown = () => {
    console.log('pullDown')
    this.setState({ downFlag: true });
    setTimeout(() => {
      console.log(2);
      const arr = [1, 2, 3, 4, 5];
      this.setState({ downFlag: false, list: arr });
    }, 500);
  };

  private pullUp = () => {
    console.log('pullUp')
    this.setState({ flag: true });
    setTimeout(() => {
      const { list } = this.state;
      const arr = Object.assign([], list);
      const length = arr.length;
      for (let i = 1; i < 6; i++) {
        arr.push(length + i);
      }
      this.setState({ flag: false, list: arr });
      console.log(length);
    }, 200);
  };

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
        showBorder: true,
      },
      children: [],
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
        {/* <Slider bannerList={this.state.bannerList}></Slider> */}

        {/* <Wrap reduceHeight={13}> */}
        {/* <MaskAllScreen visible={true}>
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
          </MaskAllScreen> */}

        {/* <Selectlist
                onClick={() => {
                  alert("扫描");
                }}
                onSubmit={(value) => {
                  alert(value);
                }}
                value={this.state.selectValue}
                onChange={(selectValue) => {
                  this.setState({ selectValue });
                }}
              ></Selectlist> */}
        {/* <Selectlist
                onClick={() => {
                  alert("扫描");
                }}
                onSubmit={(value) => {
                  alert(value);
                }}
                value={this.state.selectValue}
                onChange={(selectValue) => {
                  this.setState({ selectValue });
                }}
              ></Selectlist> */}
        {/* <Selectlist
                onClick={() => {
                  alert("扫描");
                }}
                onSubmit={(value) => {
                  alert(value);
                }}
                value={this.state.selectValue}
                onChange={(selectValue) => {
                  this.setState({ selectValue });
                }}
              ></Selectlist> */}
        {/* <ScanningList top={20} onClick={() => alert(123)}></ScanningList> */}

        <Wrap reduceHeight={14}  paddingBottom={40}>
          <Scroll
            pullDownLoading={this.state.downFlag}
            pullDown={this.pullDown}
            pullUpLoading={this.state.flag}
            pullUp={this.pullUp}
          >
            {this.state.list.map((item) => (
              <PickCard
                key={item}
                bottom={30}
                onClick={() => alert(`领料单卡片`)}
                status={dll}
                transferredDepartment="水果"
                transferDepartment="餐饮-咖啡饮品"
                materialNumber={item}
                creationTime="2017.09.14 10:40:32"
                creator="卡卡西"
              ></PickCard>
            ))}
          </Scroll>
        </Wrap>
        {/* <PickListDetails
          top={30}
          transferredDepartment="水果"
          transferDepartment="餐饮-咖啡饮品"
          creationTime="2017.09.14 10:40:32"
          creator="卡卡西"
        ></PickListDetails> */}

        {/* <DiscountModal
          onClose={() => this.setState({ flag: false })}
          visible={this.state.flag}
          value={this.state.value1}
          onChange={(value1) => {
            this.setState({ value1 });
          }}
          options={[
            { value: "1", label: "无折扣" },
            { value: "2", label: "9折" },
            { value: "3", label: "8折" },
            { value: "4", label: "7折" },
            { value: "5", label: "6折" },
            { value: "6", label: "5折" },
          ]}
        ></DiscountModal> */}
        {/* <StoreHouse
                inventory={20}
                top={40}
                sourceStoreHouseOnSubmit={() => alert(this.state.storehose)}
                sourceStoreHouse={this.state.storehose}
                sourceStoreHouseChange={(storehose) =>
                  this.setState({ storehose })
                }
                sourceStoreHouseScanning={() =>
                  alert("sourceStoreHouseScanning")
                }
                sourceStoreHouseOpen={this.state.flag}
                sourceStoreHouseSelectButtonClick={() => {
                  this.setState({ flag: !this.state.flag });
                }}
                targetStoreHouseOnSubmit={() => alert(this.state.targethose)}
                targetStoreHouse={this.state.targethose}
                targetStoreHouseChange={(targethose) =>
                  this.setState({ targethose })
                }
                targetStoreHouseScanning={() =>
                  alert("targetStoreHouseScanning")
                }
                targetStoreHouseOpen={this.state.flag}
                targetStoreHouseSelectButtonClick={() => {
                  this.setState({ flag: !this.state.flag });
                }}
              ></StoreHouse>

              <SourceTargetStoreHouse
                top={40}
                sourceStoreHouseOnSubmit={() => alert(this.state.storehose)}
                sourceStoreHouse={this.state.storehose}
                sourceStoreHouseChange={(storehose) =>
                  this.setState({ storehose })
                }
                sourceStoreHouseScanning={() =>
                  alert("sourceStoreHouseScanning")
                }
                sourceStoreHouseOpen={this.state.flag}
                sourceStoreHouseSelectButtonClick={() => {
                  this.setState({ flag: !this.state.flag });
                }}
                targetStoreHouseOnSubmit={() => alert(this.state.targethose)}
                targetStoreHouse={this.state.targethose}
                targetStoreHouseChange={(targethose) =>
                  this.setState({ targethose })
                }
                targetStoreHouseScanning={() =>
                  alert("targetStoreHouseScanning")
                }
                targetStoreHouseOpen={this.state.flag}
                targetStoreHouseSelectButtonClick={() => {
                  this.setState({ flag: !this.state.flag });
                }}
              ></SourceTargetStoreHouse>

              <DefaultStoreHouse
                defaultCheck={this.state.check}
                onCheckChange={(flag) => {
                  this.setState({ check: flag });
                }}
                top={40}
                sourceStoreHouseOnSubmit={() => alert(this.state.storehose)}
                sourceStoreHouse={this.state.storehose}
                sourceStoreHouseChange={(storehose) =>
                  this.setState({ storehose })
                }
                sourceStoreHouseScanning={() =>
                  alert("sourceStoreHouseScanning")
                }
                sourceStoreHouseOpen={this.state.flag}
                sourceStoreHouseSelectButtonClick={() => {
                  this.setState({ flag: !this.state.flag });
                }}
                targetStoreHouseOnSubmit={() => alert(this.state.targethose)}
                targetStoreHouse={this.state.targethose}
                targetStoreHouseChange={(targethose) =>
                  this.setState({ targethose })
                }
                targetStoreHouseScanning={() =>
                  alert("targetStoreHouseScanning")
                }
                targetStoreHouseOpen={this.state.flag}
                targetStoreHouseSelectButtonClick={() => {
                  this.setState({ flag: !this.state.flag });
                }}
                moveStock={20}
                targetStock={30}
              >
                <View
                  height={100}
                  paddingLeft={29}
                  paddingRight={30}
                  alignItem="center"
                >
                  <Text right={27} height={40} color="#252525" size={28}>
                    需移动库存量
                  </Text>
                  <View alignItem="center" align="end">
                    <Text color="#1D1F2B" size={30}></Text>
                  </View>
                </View>
                <BaseLine top={16} width={690}></BaseLine>
              </DefaultStoreHouse> */}
        {/* </Wrap> */}
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
    obj: state.home.obj,
  };
};
const mapDispatch = {
  add,
  currentuuidChange,
};

export default connect(mapState, mapDispatch)(Home);
