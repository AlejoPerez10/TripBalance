import React from 'react'
import Logout from'@/icons/logout.svg'
import Link from 'next/link'

const HeaderExit = () => {

    return (
        <header className="container-fluid mb-5 py-4 px-3">
            <div className="row align-items-center">
                <div className="col-9 col-sm-10">
                    <img
                        className="img-fluid w-50 w-sm-50"
                        src="/img/Logotipo.png"
                        alt="Logo de TripBalance"
                        id="logotipo"
                    />
                </div>
                <div className="col-3 col-sm-2 d-flex justify-content-end">
                    <Link href="/" className="w-75 d-flex justify-content-center">
                        <Logout className='w-50 md:w-25'/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderExit;
