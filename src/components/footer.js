import React from 'react';
import World from '@/icons/world.svg'
import Mail from '@/icons/mail.svg'
import Whatsapp from '@/icons/whatsapp.svg'
import styles from '@/styles/Home.module.css'

const Footer = () => {
    return (
        <footer className='container-fluid bg-dark px-5 py-3' style={{background:'linear-gradient(to bottom, #6c6c6c, #1c1c1c)', boxShadow:'0 0 20px black', marginTop:'200px', height:'auto'}}>

            <article className='row d-flex justify-content-center'>

                <figure className='col-12 d-flex justify-content-center align-items-center col-sm-6 justify-content-sm-start h-auto'>
                    <img className={`img-fluid my-4 ${styles.logoFooter}`} style={{width:'40%'}} src="/img/LogoAppNoFondo.png" alt="logo de TripBalance"/>
                </figure>

                <section className='row col-sm-6 h-75 justify-content-center align-items-center my-auto'>

                    <figure className='col d-none d-lg-flex gap-2 h-auto justify-content-end'>
                        <World className='d-block w-50'/>
                        <div className='d-block bg-white rounded my-auto' style={{width:'5px', height:'180px'}}></div>
                    </figure>
                    
                    <aside className='col d-flex flex-column justify-content-center gap-1 h-25'>
                        <h2 className='d-flex justify-content-center justify-content-sm-start text-white fs-3 my-auto mb-3'>Contact Us</h2>

                        <figure className='d-flex align-items-center flex-column flex-sm-row text-nowrap'>
                            <Mail style={{width:'40px', minWidth:'40px'}}/>
                            <span className='ms-1 text-white fs-5'>alejo.perezja@gmail.com</span>
                        </figure>
                        
                        <figure className='d-flex align-items-center flex-column flex-sm-row text-nowrap'>
                            <Whatsapp style={{width:'40px', minWidth:'40x'}}/>
                            <span className='ms-1 text-white fs-6'>3017619595</span>
                        </figure>
                    </aside>
                </section>
            </article>    
        </footer>
    );
};

export default Footer;
