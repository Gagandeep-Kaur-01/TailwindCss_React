import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/Project_logo.svg'


function Header({IsBgGray, IsTextWhite, NavBgLight, DarkText, NavBgDark, LightText }) {
    return (
        <header className="absolute w-full">
            <div className="px-4 max-w-prose sm:mx-12 sm:px-6">
                <div className="container relative flex items-center justify-between h-20 mx-auto">

                    {/* Logo */}
                    <img src={Logo} height="20%" width="10%"/>

                    {/* Navigation */}
                    <nav className="hidden md:flex md:flex-grow">

                        <ul className="flex flex-wrap items-center flex-grow">
                            <li>
                                <Link to="/about" className={`hover:bg-gray-200 hover:text-black px-6 py-2 flex items-center transistion duration-150 ease-in-out ${NavBgLight && "bg-gray-200"} ${DarkText && "text-black"} ${NavBgDark && "bg-gray-800"} ${LightText && "text-white"}`}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/features" className={`hover:bg-gray-200 hover:text-black px-6 py-2 flex items-center transistion duration-150 ease-in-out ${IsBgGray && "bg-gray-900"} ${IsTextWhite && "text-white"}`}>
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>

            </div>
           
            
        </header>
    )
}

export default Header
