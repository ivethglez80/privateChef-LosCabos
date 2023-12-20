import React, { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import { langContext } from "../../context/langContext";
import { MdMenu } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { TbWorld } from "react-icons/tb";
import { TbWorldDown } from "react-icons/tb";
import logochef1 from "../../img/logochef-sm2.png";



const NavBar = () => {
    const languaje = useContext(langContext);
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const [langMenuOpen, setlangMenuOpen] = useState(false);
    const toggleLangMenu = () => {
        setlangMenuOpen(!langMenuOpen);
    };


    return (
        <>
            <div className="bg-black flex flex-col justify-around md:flex md:flex-col md:justify-normal md:h-screen md:w-1/6">

                <div className="flex sm:flex-row sm:w-screen sm:pt-2 sm:ml-6 sm:justify-between md:flex-col md:w-full">
                        <span>
                        <img src={logochef1} alt="logo private chef services at los cabos" className=" md:hidden" />
                        </span>



                    
                    <span className="sm:flex sm:flex-col sm:justify-center md:pt-3"> {/*mundito toggle de lenguaje*/}
                        <div className="md:self-center md:mb-2"> 
                            {langMenuOpen ? (
                                <TbWorldDown onClick={toggleLangMenu} className="stroke-yellow-500 md:text-3xl sm:text-2xl " />
                            ) : (
                                <TbWorld onClick={toggleLangMenu} className="stroke-yellow-600 md:text-3xl sm:text-2xl "/>
                            )}
                        </div>

                        {/*Menu opciones de lenguaje*/}
                        <span className={`${langMenuOpen ? "opacity-100" : "opacity-0"} text-yellow-500 font-title sm:my-1 md:w-full md:flex md:justify-center md:ml-1 md:mb-10`}>
                            <button onClick={() => {
                                languaje.setLang('es-MX'); toggleLangMenu();
                            }} className="mr-3 rounded-md bg-gray-800 px-1">
                                Esp
                            </button>
                            <button onClick={() => {
                                languaje.setLang('en-US'); toggleLangMenu();
                            }} className="mr-3 rounded-md bg-gray-800 px-1">
                                Eng
                            </button>
                        </span> {/* termina el envoltorio de mundito y toggle nav*/}

                            {/*Menu toggle navegacion*/}
                            <span className="md:hidden flex justify-start mr-3 sm:text-2xl">
                                {menuOpen ? (
                                    <AiOutlineClose onClick={toggleMenu} style={{ color: '#FFDE59' }} />
                                    ) : (
                                        <MdMenu onClick={toggleMenu} style={{ color: '#FFDE59' }} />
                                        )}
                            </span>
                    </span>
                </div>    
                

                
                <ul className={`sm:absolute ${menuOpen ? "opacity-100" : "opacity-0"} text-sm
                      sm:bg-black sm:rounded-sm font-title sm:text-center 
                        sm:mt-72 flex flex-col sm:right-8 sm:px-2 sm:pb-1 sm:z-[10]
                        md:opacity-100 md:relative md:tracking-widest md:mt-0 md:ml-14
                      `}
                      >

                    <li className={`${location.pathname === "/" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/" onClick={toggleMenu}> HOME </Link>
                    </li>

                    <li className={`${location.pathname === "/chef" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/chef" onClick={toggleMenu}>
                                        <FormattedMessage id="nav.chef" defaultMessage="THE CHEF" />
                        </Link>
                    </li>

                    <li className={`${location.pathname === "/team" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/team" onClick={toggleMenu}> <FormattedMessage id="nav.team" defaultMessage="ABOUT US" /> </Link>
                    </li>

                    <li className={`${location.pathname === "/menu" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/menu" onClick={toggleMenu}> <FormattedMessage id="nav.menu" defaultMessage="MENU OPTIONS" /></Link>
                    </li>

                    <li className={`${location.pathname === "/services" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/services" onClick={toggleMenu}> <FormattedMessage id="nav.service" defaultMessage="SERVICES" /> </Link>
                    </li>

                    <li className={`${location.pathname === "/events" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/events" onClick={toggleMenu}> <FormattedMessage id="nav.events" defaultMessage="EVENTS" /> </Link>
                    </li>

                    <li className={`${location.pathname === "/LosCabos" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/LosCabos" onClick={toggleMenu}> <FormattedMessage id="nav.cabo" defaultMessage="LOS CABOS" /> </Link>
                    </li>

                    <li className={`${location.pathname === "/contactUs" ? "text-slate-200" : "text-slate-500"} md:border-b-2 md:border-yellow-400 md:mb-7 md:mx-4`}>
                        <Link to="/contactUs" onClick={toggleMenu}> <FormattedMessage id="nav.contactUs" defaultMessage="CONTACT US" /> </Link>
                    </li>

                </ul>
                </div>


            
        </>
    )
}

export default NavBar;