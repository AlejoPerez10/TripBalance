import React from 'react';
import Image from 'next/image'

const Header = () => {
    return (
        <header className='container text-center my-5'>
            <Image width={640} height={108} priority src="/img/Logotipo.webp" alt="Logo de TripBalance" id="logotipo" className='img-fluid w-50' />
        </header>
    );
};

export default Header;
