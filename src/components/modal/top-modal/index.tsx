import React from "react";
import styles from "./style.module.css";

interface Props {
    onOk?:()=>void;
    onCancel?:()=>void;
}

export const TopModal : React.FC<Props> = React.memo(
    props => {
        const {onOk,onCancel,children} = props 
        return (<div className={styles.body}>
            <div>
                {children}
            </div>
            <div className={styles.buttonGroup}>
                <div onClick={onCancel} className={styles.left}>取消</div>
                <div onClick={onOk} className={styles.right}>确定</div>
            </div>
        </div>)
    }
)