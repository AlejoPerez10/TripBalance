import React from 'react'

const FormatoForm = ({ title, text, children, className }) => {
    return (
        <section className={`d-flex flex-column mx-auto rounded-3 p-4 mb-5 ${className}`} style={{boxShadow:'0 0 20px black', background:'#3c3c3c'}}>
            
            <h2 className='mb-2' style={{color:'#ffd05a', fontSize:'35px', fontWeight:'bolder'}}>{title}</h2>

            <p className='m-auto mb-3' style={{color:'white', fontSize:'40px'}}>{text}</p>

            <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-4'>{children}</div>

        </section>
    );
};

export default FormatoForm;
