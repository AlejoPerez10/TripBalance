import React from 'react';

const Footer = () => {
    return (
        <footer className='container-fluid bg-dark px-5 py-3' style={{background:'linear-gradient(to bottom, #6c6c6c, #1c1c1c)', boxShadow:'0 0 20px black', marginTop:'100px'}}>

            <div className='row d-flex justify-content-center'>

                <div className='col-12 d-flex justify-content-center col-sm-6 justify-content-sm-start'>
                    <img className='img-fluid my-4 w-25' src="/img/LogoAppNoFondo.png" alt="logo de TripBalance"/>
                </div>

                <div className='row col-sm-6'>
                    <div className='col d-none d-md-flex gap-2'>
                        <img className='d-none d-sm-block img-fluid w-50 ms-auto' src="/img/world.svg" alt=""/>
                        <div className='d-none d-sm-block bg-white rounded my-auto' style={{width:'1.5%', height:'90%'}}></div>
                    </div>
                    
                    <div className='col d-flex flex-column justify-content-center gap-3'>
                        <h2 className='d-flex justify-content-center justify-content-sm-start text-white fs-1'>Contact Us</h2>

                        <div className='d-flex align-items-center flex-column flex-sm-row text-nowrap'>
                            <img style={{width:'10%'}} src='/img/mail.svg' alt="logo de correo"/>
                            <span className='ms-1 text-white fs-5'>alejo.perezja@gmail.com</span>
                        </div>
                        
                        <div className='d-flex align-items-center flex-column flex-sm-row text-nowrap'>
                            <img style={{width:'10%'}} src="/img/whatsapp.svg" alt="logo de whatsapp"/>
                            <span className='ms-1 text-white fs-5'>3017619595</span>
                        </div>
                    </div>
                </div>
            </div>    
        </footer>
    );
};

export default Footer;
