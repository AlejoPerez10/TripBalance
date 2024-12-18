import React from 'react'
import styles from '@/styles/Home.module.css'

const TravelsTripList = ({ name, icon, code, onClick }) => {
    return (
        <div
            className={`btn btn-primary border-0 d-flex align-items-center mt-4 h-auto ${styles.tripsResponsive} ${styles.laserButton}`}
            style={{height:'80px', backgroundColor:'#3c3c3c', boxShadow:'0 0 20px black', cursor:'pointer'}}
            onClick={onClick}
        >
            {icon}
            <div className='fs-1 ms-3 me-auto' style={{fontSize:'10px'}}>{name}</div>
            <p className='fs-3' style={{color:'#7c7c7c', marginLeft:'40px', marginTop:'20px'}}>{code}</p>
        </div>
    );
};

export default TravelsTripList;