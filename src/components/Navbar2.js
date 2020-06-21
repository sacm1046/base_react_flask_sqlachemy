import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar2 = props => {
    const [state, setState] = useState({
        hideMenu: true,
        hideSubmenu: false
    })
    const TEST = styled.div`
        position: fixed;
        z-index: 1;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        background-color: rgb(41, 44, 120);
    `
    const STYLE_NAV = styled.nav`
    &{
        width: 100%;
        background-color:  rgb(41, 44, 120);
    }
    //Logo 
    & a{
        padding: 13px 10px;
        width: 20%;
    }
    //Navbar menu
    & ul{
        display: flex;
        justify-content: flex-end;
        max-width: 1200px;
        width: 80%;
        margin: 0;
    }
    & ul li{
        list-style: none;
        position: relative;
        padding: 26px 10px;    
    }
    & ul li:last-child{
        border-right: none;
    }
    & ul li a{
        text-decoration: none;
        padding: 0 10px;
        color: white;
        transition: 0.3s;
    }
    & ul li a:hover{
        color: rgb(139, 139, 250);
    }
    & ul li ul{
        position: absolute;
        top: 76px;
        left: 0;
        background-color: rgba(41, 44, 120,1);
        display: block;
        width: 300px;
        padding: 0;
        transition: 0.3s;
        opacity:0;
        visibility: hidden;
        font-size: 15px;
    }
    & ul li:hover ul{
        opacity:1;
        visibility: visible;
    }
    & ul li ul li:first-child{
        border-top: 1px solid rgba(50, 50, 148, 1);
    }
    & ul li ul li{
        border-right: none;
        border-bottom: 1px solid rgba(50, 50, 148, 1);
        padding: 12px 10px;
    }
    #ServicioDropdown{
        touch-action: none;
        user-select: none;
    }
    /* Navbar mobile version */
    @media (max-width: 600px){
        &{
            .menu{
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.7s cubic-bezier(.525,.66,.495,1.4);
            }
            &.hideMenu{
                .menu{
                    max-height: 600px;
                }
            }
        }
        & ul li{
            .submenu{
                max-height: 0;
                overflow: hidden;
                transition: max-height 1s cubic-bezier(.525,.66,.495,1.4);
            }
            &.hideSubmenu{
                .submenu{
                    max-height: 600px;
                    overflow: auto;
                }
            }
        } 
        &{
            display: flex;
            justify-content: space-between;
        }
        /* Hamburger Icon Mobile */
        & .icons{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
        }
        & .icon{
            width:25px;
            height: 3px;
            background: white;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
        }
        & .icon::before,    
        & .icon::after{
            content: '';
            position: absolute;
            width: 25px;
            height: 3px;
            background: white;
            border-radius: 4px;
            transition: all 0.5s ease-in-out;
        }
        & .icon::before{
            transform: translateY(-8px);
        }
        & .icon::after{
            transform: translateY(8px);
        }
        & .icons.hideIcon .icon{
            transform: translateX(-50px);
            background: transparent;
            box-shadow: none;
        }
        & .icons.hideIcon .icon::before{
            transform: rotate(45deg) translate(35px, -35px);
        }
        & .icons.hideIcon .icon::after{
            transform: rotate(-45deg) translate(35px, 35px);
        }
        & ul{
            display: block;
            width: 100%;
            text-align: center;
            transition: 2s;
        }
        & ul li:hover{
            border-bottom: 1px solid rgb(61, 61, 161);
        }
        & ul li{
            display: block;
            border-top: 1px solid rgb(61, 61, 161);
            padding: 15px ;
        }
        & ul li ul{
            top: 54px;
            width: 100%;
            height: 300%;
            z-index: 2;  
            overflow:auto;
        }
        & ul li ul li{
            background-color: rgb(18, 20, 75);
            padding: 16px 10px;
        }
    }
    `
    const menu = () => state.hideMenu ? setState({ hideMenu: false }) : setState({ hideMenu: true })
    const submenu = () => state.hideSubmenu ? setState({ hideSubmenu: false }) : setState({ hideSubmenu: true })
    useEffect(() => setState({ hideMenu: true }), [])

    return (
        <TEST>
            <STYLE_NAV className={`nav ${state.hideMenu ? "" : "hideMenu"}`}>
                <a href="/#home"><img src='https://www.moloymedia.com/wp-content/uploads/2017/08/cropped-MoloyMedia-Logo-1.png' width="150" alt="..." /></a>
                <div className={`${state.hideMenu?"":"hideIcon"} icons`}>
                    <div className="icon" onClick={() => menu()}></div>
                </div>
                <ul className="menu">
                    <li><a onClick={() => menu()} href="/#home">Home</a></li>
                    <li className={`${state.hideSubmenu ? "hideSubmenu" : ""}`}>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => submenu()} id="ServicioDropdown">Servicios</a>
                        <ul className="submenu">
                            <li><Link onClick={() => menu()} to="/servicio#Service1">Aerofotogrametría</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service2">Agricultura de Alta Precisión</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service3">Batimetría</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service4">Catastro</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service5">Control de Obras</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service6">Cubicación</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service7">Georeferenciación</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service8">Levantamientos Topográficos</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service9">Replanteo Topográfico</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service10">Sistema de Información Geográfica</Link></li>
                            <li><Link onClick={() => menu()} to="/servicio#Service11">Urbanización</Link></li>
                        </ul>
                    </li>
                    <li><a onClick={() => menu()} href="/#aboutus">Sobre Nosotros</a></li>
                    <li><a onClick={() => menu()} href="/#contactus">Contacto</a></li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => menu()} className="pr-5 fas fa-phone" href="tel:+56945044866 "></a>
                        {/* eslint-disable-next-line */}
                        <a onClick={() => menu()} className="fas fa-at" href="mailto:contacto@apligeo.cl"></a>
                    </li>
                </ul>
            </STYLE_NAV>
        </TEST>
    )
}

export default Navbar2;