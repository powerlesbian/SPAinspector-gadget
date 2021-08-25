import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = ({title}) =>{
 
        return (
            <nav className="navbar  bg-primary">
            <h1>
             {title}
            </h1>
            <ul>
                <li>
                <Link to='/widgets'>Cool stuff to buy</Link>
                </li>
                <li>
                <Link to='/wudgets'>Money Tap</Link>
                </li>
                <li>
                <Link to='/'>Home</Link>
                </li>
            </ul>
          </nav>
        )
    
}
 Navbar.defaultProps={
  title:'Gadgets not uninspired by Inspector Gadget'
};
export default Navbar