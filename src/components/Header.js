import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <h1><Link to='/'><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" /></Link></h1>
           <Nav/>
        </div>
    );
};

export default Header;