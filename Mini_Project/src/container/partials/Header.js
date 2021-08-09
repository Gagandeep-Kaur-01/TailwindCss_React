import React from 'react'
import Logo from '../../images/Project_logo.svg'

function Header({IsBgGray, IsTextWhite}) {
    return (
        <header className="absolute w-full">
            <div className="px-4 max-w-prose sm:mx-12 sm:px-6">
                <div className="container relative flex items-center justify-between h-20 mx-auto">

                    {/* Logo */}
                    <img src={Logo} height="20%" width="10%"/>

                </div>

            </div>
           
            
        </header>
    )
}

export default Header
