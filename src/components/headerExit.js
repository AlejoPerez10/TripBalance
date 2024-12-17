import React from 'react'

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
                    <a href="/" className="w-75 d-flex justify-content-center">
                        <img
                            className="img-fluid w-25 w-sm-25"
                            src="../img/logout.svg"
                            alt="logout"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default HeaderExit;
