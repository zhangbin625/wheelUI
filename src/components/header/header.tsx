import React from "react";
import styles from "./header.module.css";
import goback from "./goback.svg";
import se from "./search.svg";
import { px2vw } from "../util";

interface Props {
  goBack?: () => void;
  search?: () => void;
  Icon?: any;
}
export const Header: React.FC<Props> = React.memo(props => {
  const { children, goBack, search, Icon } = props;
  const style = {
    width: px2vw(36),
    height: px2vw(37)
  };
  return (
    <div className={styles.body}>
      <div className={styles.imgbody}>
        {goBack ? <img src={goback} alt="返回" onClick={goBack}></img> : null}
      </div>
      <div>{children}</div>
      <div className={styles.img2body}>
        {Icon ? Icon : null}
        {search ? (
          <img src={se} alt="查找" style={style} onClick={search} />
        ) : null}
      </div>
    </div>
  );
});
