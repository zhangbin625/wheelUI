import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useMemo,
  useImperativeHandle,
} from "react";
import BScroll from "better-scroll";
import { ScrollContainer, PullDownLoading, PullUpLoading } from "./style";
import { DownLoading ,UpLoading} from "../loading";
import { Debounced, Throttle } from "../util";

interface Props {
  direction?: "vertiacal" | "horizental"; //滚动的方向
  click?: boolean; //是否支持点击
  refresh?: boolean; //是否刷新
  onScroll?: Function; //滑动出发回调函数
  pullUp?: Function; //上拉加载逻辑
  pullDown?: Function; //下拉加载逻辑
  pullUpLoading?: boolean; //是否显示上拉loading动画
  pullDownLoading?: boolean; //是否显示下拉loading动画
  bounceTop?: boolean; //是否支持向上吸顶
  bounceBottom?: boolean; //是否支持向下吸顶
}

export const Scroll: React.FC<Props> = React.memo(
  forwardRef((props, ref) => {
    const [bScroll, setBScroll]: any = useState();
    const scrollContaninerRef: any = useRef();
    const {
      direction,
      click,
      refresh,
      pullUpLoading,
      pullDownLoading,
      bounceBottom,
      bounceTop,
    } = props;
    const { pullUp = () => {}, pullDown = () => {}, onScroll } = props;

    let pullUpDebounce = useMemo(() => {
      return new Throttle().use(pullUp, 500);
    }, [pullUp]);

    let pullDownDebounce = useMemo(() => {
      return new Throttle().use(pullDown, 500);
    }, [pullDown]);

    useEffect(() => {
      const current: any = scrollContaninerRef.current;
      const scroll: any = new BScroll(current, {
        scrollX: direction === "horizental",
        scrollY: direction === "vertiacal",
        probeType: 3,
        click: click,
        bounce: {
          top: bounceTop,
          bottom: bounceBottom,
        },
      });
      setBScroll(scroll);

      return () => {
        setBScroll(null);
      };
    }, []);

    useEffect(() => {
      if (!bScroll || !onScroll) return;
      bScroll.on("scroll", (scroll: any) => {
        onScroll(scroll);
      });
      return () => {
        bScroll.off("scroll");
      };
    }, [onScroll, bScroll]);

    useEffect(() => {
      if (!bScroll || !pullUp) return;
      const handlePullUp = () => {
        //判断是否滑动到了底部
        if (bScroll.y <= bScroll.maxScrollY + 100) {
          pullUpDebounce();
        }
      };
      bScroll.on("scrollEnd", handlePullUp);
      return () => {
        bScroll.off("scrollEnd", handlePullUp);
      };
    }, [pullUp, pullUpDebounce, bScroll]);

    useEffect(() => {
      if (!bScroll || !pullDown) return;
      const handlePullDown = (pos: any) => {
        //判断用户的下拉动作
        if (pos.y > 50) {
          pullDownDebounce();
        }
      };
      bScroll.on("touchEnd", handlePullDown);
      return () => {
        bScroll.off("touchEnd", handlePullDown);
      };
    }, [pullDown, pullDownDebounce, bScroll]);

    useEffect(() => {
      if (refresh && bScroll) {
        bScroll.refresh();
      }
    });

    useImperativeHandle(ref, () => ({
      refresh() {
        if (bScroll) {
          bScroll.refresh();
          bScroll.scrollTo(0, 0);
        }
      },
      getBScroll() {
        if (bScroll) {
          return bScroll;
        }
      },
    }));

    const PullUpdisplayStyle = pullUpLoading
      ? { display: "" }
      : { display: "none" };
    const PullDowndisplayStyle = pullDownLoading
      ? { display: "" }
      : { display: "none" };
    return (
      <ScrollContainer ref={scrollContaninerRef}>
        <div>
          {/* 顶部下拉刷新动画 */}
          <PullDownLoading style={PullDowndisplayStyle}>
            <UpLoading></UpLoading>
          </PullDownLoading>
          {props.children}
          {/* 滑到底部加载动画 */}
          <PullUpLoading style={PullUpdisplayStyle}>
            <DownLoading></DownLoading>
          </PullUpLoading>
        </div>
      </ScrollContainer>
    );
  })
);
Scroll.defaultProps = {
  direction: "vertiacal",
  click: true,
  refresh: true,
  onScroll: undefined,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: undefined,
  pullDown: undefined,
  bounceTop: true,
  bounceBottom: true,
};
