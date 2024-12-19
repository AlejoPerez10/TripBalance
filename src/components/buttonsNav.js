import React from 'react';
import styles from '@/styles/Home.module.css'

const ButtonsNav = ({ name, icon, altura, onClick }) => {
    return (
        <button 
            type="button"
            className={`col-3 btn btn-primary border-0 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 ${styles.activeButtonsNav}`}
            style={{ height: altura, backgroundColor: '#3c3c3c', boxShadow: '0 0 20px black' }}
            onClick={onClick}
        >
            {icon}
            <div className={`fw-bold ${styles.textButtonsNavResponsive}`} style={{fontSize:'12px'}}>{name}</div>
        </button>

    );
};

export default ButtonsNav;