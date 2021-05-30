import React from 'react';
import { Link } from 'react-router-dom';

function Header(IsBgGray, IsTextWhite) {
  return (
    <header className={`w-full z-30 ${IsBgGray && "bg-gray-900"} ${IsTextWhite && "text-white"}`}>
      <div className="max-w-prose mx-12 px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">         

          {/* Navigation */}
          <nav className="md:flex md:flex-grow">
         
            <Link to="/" className={`text-4xl hover:text-gray-200 px-6 py-2 flex transition duration-150 ease-in-out `}>
              MyProject
            </Link>

            {/* Menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center"> 
               
              <li>
                <Link to="/about" className={`hover:text-gray-200 px-6 py-2 flex items-center transition duration-150 ease-in-out `}>
                  About
                </Link>
              </li>             
              <li>
                <Link to="/features" className="hover:text-gray-200 px-6 py-2 flex items-center transition duration-150 ease-in-out">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-200 px-6 py-2 flex items-center transition duration-150 ease-in-out">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200 px-6 py-2 flex items-center transition duration-150 ease-in-out">
                  Contact
                </Link>
               </li>
            </ul>

            {/* Sign in links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              
              <li>
                  <Link to="/signin" className="text-gray-300 hover:text-gray-200 pl-30 pr-10 py-2 flex items-center transition duration-150 ease-in-out ">Login</Link>
                </li>
                <li>
                <div className="pr-30">
                <Link to="/signup" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign Up
                </Link>
                </div> 
              </li>

            </ul>

          </nav>
        

        </div>
      </div>
    </header>
  );
}

export default Header;
