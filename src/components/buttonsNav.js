import React from 'react';
import styles from '@/styles/Home.module.css'

const ButtonsNav = ({ name, src, alt, altura, onClick }) => {
    return (
        <button 
            type="button"
            className={`col-7 col-sm-3 btn btn-primary border-0 d-flex justify-content-center align-items-center gap-3 ${styles.activeButtonsNav}`}
            style={{ height: altura, backgroundColor: '#3c3c3c', boxShadow: '0 0 20px black' }}
            onClick={onClick}
        >
            <img className='img-fluid' style={{ width:'20%' }} src={src} alt={alt} />
            <div className="fs-1">{name}</div>
        </button>

    );
};

export default ButtonsNav;