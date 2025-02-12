import React, { useEffect, useState } from 'react'
import Logout from'@/icons/logOut.svg'
import { IconChevronLeftPipe } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'

const HeaderExit = ( ) => {
    const router = useRouter();
    const [path, setPath] = useState('');

    const isListPage = router.pathname === '/tripList';

    useEffect(() => {
        const actualPath = router.pathname;
        
        if(actualPath === '/tripDetails'){
            setPath('/tripList');
        } else if(actualPath === '/expensesDetails'){
            setPath('/tripDetails');
        };
    },[router.pathname])

    return (
        <header className="w-100 d-flex justify-content-center align-items-center mb-5 my-4 px-3">

            { isListPage 
                ? null 
                : <Link href={path}>
                    <IconChevronLeftPipe color='#ffd05a' className='position-absolute' style={{width:'5%', height:'10%', top:'5%', left:'2%'}}/>
                </Link>
            }

            <div className='col-9'>
                <Link className='position-relative' style={{left:'-5%'}} href="/tripList" title='Go Home'>
                    <Image width={640} height={108} className="img-fluid w-50 w-sm-50" src="/img/Logotipo.webp" alt="Logo de TripBalance" id="logotipo"/>
                </Link>
            </div>
            
            <div className='col-3 position-absolute ' style={{right:'-17.5%'}}>
                <Link className="col-3 d-flex justify-content-center" href="/" title='Sign Out'>
                    <Logout className='w-50 md:w-25'/>
                </Link>
            </div>

        </header>
    );
};

export default HeaderExit;
