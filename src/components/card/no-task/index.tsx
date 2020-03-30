import React from "react";
import styles from "./style.module.css";
import notask from "../../../../assets/images/notask.svg";
import { px2vw } from "../../util";

interface Props {
  top?: number;
}

export const NoTask: React.FC<Props> = React.memo(props => {
  const { top = 0 } = props;
  const style = {
    marginTop: px2vw(top)
  };
  return (
    <div className={styles.body} style={style}>
      <div className={styles.content}>
        <img className={styles.img} src={notask} alt="no task"></img>
        <div className={styles.font}>没有任务，先休息一下</div>
      </div>
    </div>
  );
});
