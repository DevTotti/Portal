import React from 'react'
import styles from '../styles/Toast.module.css'


function Toast({info}) {
    return (
        <div className={styles.toast_body} style={{backgroundColor: `${info.bg}`}}>   
            <h2>{info.title}</h2>
            <p>{info.msg}</p>
        </div>
    )
}

export default Toast
