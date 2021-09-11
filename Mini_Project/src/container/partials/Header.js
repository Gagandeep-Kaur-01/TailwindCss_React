import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/Project_logo.svg'


function Header({IsBgGray, IsTextWhite, NavBgLight, DarkText, NavBgDark, LightText }) {
    return (
        <header className="absolute w-full">
            <div className="px-4 max-w-prose sm:mx-12 sm:px-6 py-6">
                <div className="container relative flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/">
                        <img src={Logo} height="20%" width="20%"/>
                    </Link>
                    

                    {/* Navigation */}
                    <nav className="hidden md:flex md:flex-grow flex w-full">

                        <ul className="flex items-center flex-grow">
                            <li>
                                <Link to="/about" className={`hover:bg-purple-500 hover:text-black px-6 py-2 flex items-center transistion duration-150 ease-in-out font-bold ${NavBgLight && "bg-gray-200"} ${DarkText && "text-black"} ${NavBgDark && "bg-gray-800"} ${LightText && "text-white"}`}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/features" className={`hover:bg-purple-500 hover:text-black px-6 py-2 flex items-center transistion duration-150 ease-in-out font-bold ${NavBgLight && "bg-gray-200"} ${DarkText && "text-black"} ${NavBgDark && "bg-gray-800"} ${LightText && "text-white"}`}>
                                    Features
                                </Link>
                            </li>
                            <li>
                               <Link to="/projects"className={`hover:bg-purple-500 hover:text-black px-6 py-2 flex items-center transistion duration-150 ease-in-out font-bold ${NavBgLight && "bg-gray-200"} ${DarkText && "text-black"} ${NavBgDark && "bg-gray-800"} ${LightText && "text-white"}`}>
                                  Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact"className={`hover:bg-purple-500 hover:text-black px-6 py-2 flex items-center transistion duration-150 ease-in-out font-bold ${NavBgLight && "bg-gray-200"} ${DarkText && "text-black"} ${NavBgDark && "bg-gray-800"} ${LightText && "text-white"}`}>
                                   Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Sign in links */}
                        <ul className="flex flex-grow justify-end items-center ml-50">
              
                            <li>
                                <Link to="/signin" className="text-gray-300 hover:text-gray-200 ml-50 pr-5 py-2 flex items-center transition duration-150 ease-in-out font-bold ">
                                    Login
                                </Link>
                                 
                            </li>
                            <li>
                                <Link to="/signup" className="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-bold">
                                    Sign Up
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
