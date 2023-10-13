import React from 'react';
import { NavWrapper, NavbarTitle, RouteOptions, RouteLinks } from '../styles/Navbar';

const Navbar = () => {
    const fetchPathName = () => {
        console.log('fetchPathName ===> ', window.location.pathname)
        return window.location.pathname
    };
  return (
    <NavWrapper>
        <NavbarTitle href='/order'>Recco</NavbarTitle>
        <RouteOptions>
            <RouteLinks href="/store" $currentPath='/store' $activePath={fetchPathName}>Store</RouteLinks>
            <RouteLinks href="/order" $currentPath='/order' $activePath={fetchPathName}>Orders</RouteLinks>
            <RouteLinks href="/analytic" $currentPath='/analytic' $activePath={fetchPathName}>Analytics</RouteLinks>
        </RouteOptions>
    </NavWrapper>
  );
};

export default Navbar;