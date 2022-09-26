import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from './Logo';


const Navbar = () => {
return (
<div className='navigation'>
<Logo />
<ul>
<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li>Accueil</li>
</NavLink>
<NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li>Connexion</li>
</NavLink>
<NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li>Contact</li>
</NavLink>
<NavLink to="/groupe" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li>Groupe</li>
</NavLink>
<NavLink to="/moyens" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li>Moyens</li>
</NavLink>
<NavLink to="/secteurs" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li>Secteurs</li>
</NavLink>
<NavLink to="/services" className={(nav) => (nav.isActive ? "nav-active" : "")} >
<li>Services</li>
</NavLink>
</ul>
</div>
);
};
export default Navbar;