import React from 'react'
import styles from '@/styles/Home.module.css'
import AirplaneTicket from '@/icons/airplaneTicket.svg'
import { IconTrash } from '@tabler/icons-react'

const TravelsTripList = ({ name, code, onClick, onDelete }) => {

    return (
        <div
            className={`btn btn-primary position-relative border-0 d-flex align-items-center mt-4 h-auto ${styles.tripsResponsive} ${styles.laserButton}`}
            style={{backgroundColor:'#3c3c3c', boxShadow:'0 0 20px black', cursor:'pointer'}}
            onClick={onClick}
        >
            <AirplaneTicket className={`${styles.iconsTravelsTripList}`} style={{minWidth:''}}/>
            <div className={`ms-3 ${styles.textTravelsTripListResponsive}`} >{name}</div>
            <p className={`ms-0 ${styles.textCodeResponsive}`} style={{color:'#7c7c7c', margin:'auto 0'}}>{code}</p>
            <IconTrash color='#ffd05a' title='Delete'
                className={`${styles.trashCan}`} 
                style={{minWidth:'30px', zIndex:'60'}}
                onClick={(e) => {
                    e.stopPropagation(); // Evita que se dispare el onClick del contenedor
                    onDelete(code);
                }}
            />
        </div>
    );
};

export default TravelsTripList;