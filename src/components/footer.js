import React from 'react';
import World from '@/icons/world.svg'
import Mail from '@/icons/mail.svg'
import Whatsapp from '@/icons/whatsapp.svg'

const Footer = () => {
    return (
        <footer className='container-fluid bg-dark px-5 py-3' style={{background:'linear-gradient(to bottom, #6c6c6c, #1c1c1c)', boxShadow:'0 0 20px black', marginTop:'100px'}}>

            <div className='row d-flex justify-content-center'>

                <div className='col-12 d-flex justify-content-center col-sm-6 justify-content-sm-start'>
                    <img className='img-fluid my-4 w-25' src="/img/LogoAppNoFondo.png" alt="logo de TripBalance"/>
                </div>

                <div className='row col-sm-6'>
                    <div className='col d-none d-lg-flex gap-2'>
                        <World/>
                        <div className='d-none d-sm-block bg-white rounded my-auto' style={{width:'1.5%', height:'90%'}}></div>
                    </div>
                    
                    <div className='col d-flex flex-column justify-content-center gap-3'>
                        <h2 className='d-flex justify-content-center justify-content-sm-start text-white fs-1'>Contact Us</h2>

                        <div className='d-flex align-items-center flex-column flex-sm-row text-nowrap'>
                            <Mail style={{width:'40px', minWidth:'40px'}}/>
                            <span className='ms-1 text-white fs-5'>alejo.perezja@gmail.com</span>
                        </div>
                        
                        <div className='d-flex align-items-center flex-column flex-sm-row text-nowrap'>
                            <Whatsapp style={{width:'40px', minWidth:'40x'}}/>
                            <span className='ms-1 text-white fs-5'>3017619595</span>
                        </div>
                    </div>
                </div>
            </div>    
        </footer>
    );
};

export default Footer;
