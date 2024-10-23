import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            {/* left */}
            <div>
                 <h3>Logo</h3>
            </div>
            {/* right/menu */}
            <div className='flex gap-10'>
                 <a href="">Home</a>
                 <a href="">Product</a>
                 <a href="">Cart1</a>
                 <a href="">$500</a>
            </div>
        </div>
    );
};

export default Navbar;