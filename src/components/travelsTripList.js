import React from 'react'
import styles from '@/styles/Home.module.css'

const TravelsTripList = ({ name, src, alt, code, onClick }) => {
    return (
        <div
            className={`btn btn-primary border-0 d-flex justify-content-center align-items-center mt-4 ${styles.tripsResponsive} ${styles.laserButton}`}
            style={{height:'80px', backgroundColor:'#3c3c3c', boxShadow:'0 0 20px black', cursor:'pointer'}}
            onClick={onClick}
        >
            <img style={{height:'100%'}} src={src} alt={alt}/>
            <div className='fs-1 ms-3' style={{fontSize:'10px'}}>{name}</div>
            <p className='fs-3' style={{color:'#7c7c7c', marginLeft:'40px', marginTop:'20px'}}>{code}</p>
        </div>
    );
};

export default TravelsTripList;