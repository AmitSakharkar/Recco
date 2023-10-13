import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar-parent-container'>
        <div>
            <a href='/order'>Recco</a>
        </div>
        <div>
            <ul>
                <li>
                    <a href="/store">Store</a>
                </li>
                <li>        
                    <a href="/order">Orders</a>
                </li>
                <li>
                    <a href="/analytic">Analytics</a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;