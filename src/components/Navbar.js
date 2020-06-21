import React, { useState } from "react"
import styled from "styled-components"

const Navbar = () => {
    const [mobile, setMobile] = useState('')
    const DIV_SPACE = styled.div`
        width: 100%;
        display: block;
        @media only screen and (max-width: 992px) {
            display: none;
            width: 0;
        }
    `
    const DIV = styled.div`
        @keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
        }
        & .show{
            display:none;     
            }
        & .hide {
            .show{    
                display:none;
                @media only screen and (max-width: 992px) {
                    background-color: rgba(255,255,255,.97);
                    position: fixed;   
                    top: 0;
                    height: 100vh;
                    width: 100vw;
                    z-index: 100;
                    display: flex;
                    flex-direction: column;
                    animation: fadeIn ease-out 250ms;
                        div{
                            height: 50%;
                            margin:auto;
                            width: 50vw;
                            ul{
                                list-style: none;
                                padding: 0;
                                text-align: center;
                                li {
                                    padding: 10px;
                                    width: 100%;
                                    a{
                                        text-decoration: none;
                                        color: rgba(0,0,0,0.7);
                                        font-weight: 600;
                                        transition: color .3s ease;
                                        text-transform: uppercase;
                                        &:hover{
                                            color: red;
                                        }
                                    }
                                }
                            }
                        span{
                            display: flex;
                            justify-content: flex-end;
                            border: none;
                                button{
                                    background-color: transparent;
                                    border: none;
                                    font-size: 25px;
                                    font-weight: 600;
                                    color: black;                
                                    outline: 0;
                                    transition: color .3s ease;
                                        &:hover, &:active{
                                            color: red;
                                            outline: 0;
                                        }
                                }         
                        }
                        }
                }
            }
        }
    }
    `
    const HAMBURGER = styled.button`
        border: none;
        outline: 0;
        &:hover > span{
            transform: scale(.95);
        }
        &:active{
            border: none;
            outline: 0;  
        }

    `
    const DROPDOWN = styled.div`
    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
    text-align: right;
    border-radius: 0;
    border: none;
    padding: 0;
    top: 46px;
    animation: fadeIn ease-out 250ms;
    & a{
        color: rgba(255,255,255,1);
        background: rgba(52,58,64,0.98);
        transition: all 250ms ease-out;
        padding: 12px 20px;
        &:hover{
            background: rgba(52,58,64,0.95);
            color: rgba(255,255,255,1);
        }
    }

    `

    return (
        <>
            <DIV>
                <div className={`${mobile}`}>
                    <div className="show">
                        <div>
                            <span>
                                <button onClick={() => setMobile('')}>✕</button>
                            </span>
                            <ul>
                                <li><a onClick={() => setMobile('')} href="/">test 1 asdasdasdas asdasdasdaasdasdsd asdasd</a></li>
                                <hr />
                                <li><a onClick={() => setMobile('')} href="/">test 2</a></li>
                                <hr />
                                <li><a onClick={() => setMobile('')} href="/">test 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </DIV>
            <nav name="fake-navbar" className="navbar navbar-expand-lg navbar-dark">
                <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top pl-5 pr-5">
                <a className="navbar-brand" href="/">Logo</a>
                <DIV_SPACE></DIV_SPACE>
                <HAMBURGER className="navbar-toggler" onClick={() => setMobile('hide')} type="button" data-toggle="" data-target="" aria-controls="" aria-expanded="false" aria-label="">
                    <span className="navbar-toggler-icon" />
                </HAMBURGER>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/w" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Dropdown
                            </a>
                            <DROPDOWN className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Row</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </DROPDOWN>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar