import React from "react"
import { Link } from 'react-router-dom'

const Navbar = ({children}) => {
    return (
        <>
            <div className="fake"></div>

            <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
                <div className="container">


                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        Logo
                    </Link>


                    {/* Hamburger Icon */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcollapseid">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* Mobile Menu */}
                    <div className="collapse navbar-collapse" id="navbarcollapseid" >
                        <ul className="navbar-nav d-lg-none">

                            <li className="nav-item">
                                <a className="nav-link" href="/">OPCION 1</a>
                            </li>

                            <li className="nav-item">
                                {/* eslint-disable-next-line */}
                                <a className="nav-link" data-toggle="collapse" data-target="#dropdown">DROPDOWN 1</a>
                                <div className="collapse navbar-collapse" id="dropdown">
                                    <ul className="navbar-nav" style={{ overflowY: "auto", height: "auto" }}>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/" >SUB OPCION 1</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/" >SUB OPCION 2</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/">OPCION 2</a>
                            </li>

                        </ul>
                    </div>


                    {/* Desktop Menu */}
                    <ul className="navbar-nav ml-auto d-none d-lg-flex">

                        <li className="nav-item">
                            <a className="nav-link" href="/">OPCION 1</a>
                        </li>

                        <li className="nav-item dropdown">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="#dropdownDesktop" id="navbarDropdown">DROPDOWN 1</a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="nav-link" href="/" >SUB OPCION 1</a>
                                <a className="nav-link" href="/" >SUB OPCION 2</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">OPCION 2</a>
                        </li>

                    </ul>


                </div>

                {/* Styles Navbar */}
                <style jsx="true">{`
                    .fake{
                        background-color: red;
                        height: 56px;

                    }
                    a{
                        color: rgba(0,0,0,1);
                        transition: color 400ms ease-in-out;
                    }
                    a:hover{
                        color: rgba(32, 18, 18, 1);
                        text-decoration: none;
                        cursor: pointer;
                    }
                    .dropdown-menu{
                        top: 45px;
                        padding: 0;
                        border-radius: 0;
                        border: 0;
                        animation: fadeIn ease-out 350ms;

                    }
                    @keyframes fadeIn {
                        0% {opacity:0;}
                        100% {opacity:1;}
                    }
                    .dropdown-menu > a{
                        color: #6c757d;
                        padding: 10px;
                        background-color: rgba(249, 249, 249, 1);  
                        transition: all 350ms ease-in-out;
                    }
                    .dropdown-menu > a:active{
                        background-color: rgba(249, 249, 249, 1);
                    }
                    .dropdown-menu > a:hover{
                        background-color: rgba(243, 243, 243, 1);
                    }
                    .navbar-toggler, .navbar-toggler:active{
                        border: 0 !important; 
                        outline: 0 !important;
                        background-color: rgba(249, 249, 249, 1);
                        transition: all 350ms ease-in-out;
                    }
                    .navbar-toggler:hover{
                        background-color: rgba(243, 243, 243, 1);
                    }
                `}</style>
            </nav>
        
            <div>
                {children}
            </div>
        </>
    )
}
export default Navbar