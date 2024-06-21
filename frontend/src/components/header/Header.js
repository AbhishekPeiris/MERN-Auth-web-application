import React from 'react';
import "./Header.scss"
import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <BiLogIn size={35}/>
                    <span>AUTH:</span>
                </div>
                <ul className='home-links'>
                    <li className='--flex-center'>
                        <FaUserCircle size={20}/>
                        <p className='--color-white'>
                            &nbsp;Hi, Abhishek | 
                        </p>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
