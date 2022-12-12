import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
return (
<div className='navigation'>
<ul>
<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li></li>
</NavLink>
<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li></li>
</NavLink>
</ul>
</div>
);
};
export default Navbar