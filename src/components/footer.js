import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import {IconLetterCSmall} from '@tabler/icons-react';

const Footer = () => {

    const router = useRouter();

    return (
        <footer className='container-fluid position-relative d-flex flex-column px-5 py-3' style={{background:'linear-gradient(to bottom, #6c6c6c, #1c1c1c)', boxShadow:'0 0 20px black', marginTop:'210px', height:'auto'}}>
            <section className='container-fluid justify-content-between mb-3 d-lg-flex'>
                <Link href={router.pathname} className='d-flex align-items-center h-auto gap-1 mb-3'>
                    <Image width={400} height={400} className={`img-fluid col-2 ${styles.logoFooter}`}  src="/img/Logo.webp" alt="logo de TripBalance"/>
                    <Image width={400} height={400} className={`img-fluid col-7 col-sm-6 col-md-3 mt-2 ${styles.logotipoFooter}`} src="/img/Logotipo.webp" alt=""/>
                </Link>

                <ul className={`d-flex list-unstyled gap-3 fs-6 my-auto justify-content-center ${styles.fontFooter}`}>
                    <Link href='#' className={`text-white opacity-75 text-decoration-none ${styles.hoverUnderline}`}>About</Link>
                    <Link href='#' className={`text-white opacity-75 text-decoration-none ${styles.hoverUnderline}`}>FAQ</Link>
                    <Link href='#' className={`text-white opacity-75 text-decoration-none text-nowrap ${styles.hoverUnderline}`} style={{hover:'underline'}}>Privacy Policy</Link>
                    <Link href='#' className={`text-white opacity-75 text-decoration-none ${styles.hoverUnderline}`}>Contact</Link>
                </ul>
            </section>

            <aside className='w-full d-flex flex-column text-white opacity-75 mb-1'>
                <div className={`bg-white opacity-25 ${styles.divBar}`} style={{height:'2px', width:'100%'}}></div>
                <Link href='https://www.linkedin.com/in/alejandro-perez-jaramillo-186137318/' target='_blank' rel='noopener noreferrer'
                    className={`text-decoration-none text-white position-relative mt-3 mx-auto z-3 fs-6 ${styles.hoverUnderline} ${styles.fontFooter}`} >
                    <IconLetterCSmall size='20' className={`mb-1 ${styles.cFooter}`}/>
                    2024 Alejandro Perez Jaramillo.
                    <div className={`bg-transparent border border-2 position-absolute rounded-circle ${styles.circleFooter}`} style={{width:'15px', height:'15px', left:'1.20%', top:'17%'}}/>
                </Link>
            </aside>
            
        </footer>
    );
};

export default Footer;
