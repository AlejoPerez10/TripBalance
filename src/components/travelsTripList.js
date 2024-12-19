import React from 'react'
import styles from '@/styles/Home.module.css'

const TravelsTripList = ({ name, icon, code, onClick }) => {
    return (
        <div
            className={`btn btn-primary border-0 d-flex align-items-center mt-4 h-auto ${styles.tripsResponsive} ${styles.laserButton}`}
            style={{backgroundColor:'#3c3c3c', boxShadow:'0 0 20px black', cursor:'pointer'}}
            onClick={onClick}
        >
            {icon}
            <div className={`ms-3 ${styles.textTravelsTripListResponsive}`} >{name}</div>
            <p className={`ms-auto ${styles.textTravelsTripListResponsive}`} style={{color:'#7c7c7c', margin:'auto 0'}}>{code}</p>
        </div>
    );
};

export default TravelsTripList;