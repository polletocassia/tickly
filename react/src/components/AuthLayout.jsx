import { Outlet } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function AuthLayout() {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-10 col-sm-10 col-md-10 col-lg-8 col-xl-5">
                    <div className="card shadow modal-body-radius">
                        <div className="card-body p-4 p-md-5">

                            <div className="d-flex justify-content-center align-items-center mb-4">
                                <img src={logo} alt="Logo Tickly" style={{ height: '60px' }} />
                            </div>
                            

                            <Outlet />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}