import React from 'react'
import styles from './style.module.css'

interface Props {
    type?:'default'|'primary';
    onClick?:()=>void;
}

export const Button : React.FC<Props> = React.memo( props => {
    const {type='default',children,onClick} = props
    let Elment = null 
    if(type==='primary'){
        Elment = <div className={styles.primary} onClick={onClick}>{children}</div>
    }else{
        Elment = <div className={styles.default} onClick={onClick}>{children}</div>
    }
    return <>{Elment}</>
})
