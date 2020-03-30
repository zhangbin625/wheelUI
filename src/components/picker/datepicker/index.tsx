import React, { useState } from "react";
import { DatePickerView as DPV } from "antd-mobile";
import { Button } from "../../button";
import "./style.css";
import styles from "./style.module.css";
import { convert } from "../../util";

interface Props {
  start?: string;
  end?: string;
  onChange?: (date: Object) => void;
}

export const DatePicker: React.FC<Props> = React.memo(props => {
  const { start = "", end = "" } = props;
  const [time, setTime] = useState(new Date());
  const [flag, setFlag] = useState("startTime");
  const timeOnChange = (date: Object) => {
    const { onChange = (obj:any) => {} } = props;
    const currentTime = convert(new Date(date.toString()), "hh:mm");
    switch (flag) {
      case "startTime":
        onChange({ key: "start", value: currentTime });
        break;
      case "endTime":
        onChange({ key: "end", value: currentTime });
        break;
      default:
        break;
    }
    setTime(new Date(date.toString()));
  };

  const inputClick = (flag: string) => {
    setFlag(flag);
    setTime(new Date());
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.header}>自定义起止时间</div>
        <div className={styles.content}>
          <div className={styles.inputbody}>
            <input
              className={styles.input}
              readOnly
              value={start}
              placeholder="开始时间"
              onClick={() => inputClick("startTime")}
            ></input>
            <div
              style={{
                background: flag === "startTime" ? "#FF3E20" : "#C1C3C8"
              }}
              className={styles.slice}
            ></div>
          </div>
          <div className={styles.font}>至</div>
          <div className={styles.inputbody}>ß
            <input
              value={end}
              className={styles.input}
              readOnly
              placeholder="结束时间"
              onClick={() => inputClick("endTime")}
            ></input>
            <div
              style={{
                background: flag === "endTime" ? "#FF3E20" : "#C1C3C8"
              }}
              className={styles.slice}
            ></div>
          </div>
        </div>
        <div>
          <DPV onChange={timeOnChange} value={time} mode="time"></DPV>
        </div>
      </div>
    </>
  );
});
