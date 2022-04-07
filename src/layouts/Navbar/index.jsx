                                                                                                                                                                                              import React, { useContext } from 'react'
import { AuthContext } from '../../components/context/AuthContext';
import Logout from '../../components/Logout';
export default function Navbar() {
    const { isAuth } = useContext(AuthContext)
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="#portfolio">Books</a></li>
                            <li class="nav-item"><a class="nav-link" href="#about">Libraries</a></li>
                            <li class="nav-item"><a class="nav-link" href="#team">Authors</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                            {
                            isAuth ?
                                <Logout /> :
                                <>
                                    <li class="nav-item"><button class="btn btn-primary" onClick={() => window.location.href = '/Login'}>Login</button></li>
                                    <li class="nav-item"><button class="btn btn-link" onClick={() => window.location.href = '/Register'}>Register Now!</button></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}