import React from 'react'
import PropTypes from 'prop-types';
import Login from './Login';

const Navbar = ({storeIcon, storeTitle}) => {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                <i className={storeIcon} aria-hidden="true"></i>{storeTitle}
                </h1>
                <Login />
            </nav>
        );
}

Navbar.defaultProps = {
    storeTitle: 'Awesome Product Store',
    storeIcon: 'fab fa-github',
};

Navbar.propTypes={
    storeTitle: PropTypes.string.isRequired,
    storeIcon: PropTypes.string.isRequired
}
export default Navbar
