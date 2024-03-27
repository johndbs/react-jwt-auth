import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({to, text}) => {
  return (
    <li className='nav-item'>
        <Link to={to} className='nav-link'>{text}</Link>
    </li>
  )
};

export default NavItem;
