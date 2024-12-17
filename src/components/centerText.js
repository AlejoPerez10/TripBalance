import React from 'react'
import styles from '@/styles/Home.module.css'

const CenterText = () => {
    return (
        <div
            className={`${styles.hidden} ${styles.centerText} hidden d-flex justify-content-center align-items-center`}
            style={{color:'#ffd05a', width:'100%', height:'500px', fontWeight:'bolder'}}
        >
            CREATE OR JOIN A TRIP
        </div>
    );
};

export default CenterText;
