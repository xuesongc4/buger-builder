import React from 'react';
import classes from './NaviationItems.module.css'
import NavItem from "./NaviationItem/NavigationItem";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" active>Burger Builder</NavItem>
        <NavItem link='/'>Checkout</NavItem>
    </ul>
);

export default navigationItems