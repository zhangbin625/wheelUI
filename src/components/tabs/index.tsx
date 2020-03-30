import React from "react";
import { Tabs as FreshTabs } from "antd-mobile";
import "./style.css";
import { PropsType } from "rmc-tabs";

type Props = Partial<PropsType>;

export const Tabs: React.FC<Props> = React.memo(props => {
    const { children } = props;
    const tabs = (children as any).map((child:any) => {
      const { title } = child.props;
      return {
        title: (
          <div className="tab-title-header">
            {title}
            <div className="tab-title-header-bar"></div>
          </div>
        )
      };
    });
  return (
    <>
      <FreshTabs tabs={tabs} initialPage={0} {...props}>
        {props.children}
      </FreshTabs>
    </>
  );
});

export const TabPhane: React.FC<any> = React.memo(props => {
  return <div className="tab-phane-body">{props.children}</div>;
});
