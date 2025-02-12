import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link'

const FooterForm = ({ text, linkText, linkHref  }) => {
    return (
        <p className='text-center mb-0 mt-5 text-white fs-5'>
            {text} <Link href={linkHref} className={styles.linkStyle} style={{color:'#ffd05a', textDecoration:'none', }}>{linkText}</Link>
        </p>
    );
};

export default FooterForm;
