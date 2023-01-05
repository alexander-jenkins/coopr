import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import user from '../images/person-circle.svg';

function UserDropdown({ children }) {
    return (
        <div>
            <NavDropdown
                className='pe-3'
                align='end'
                title={
                    <img
                        src={user}
                        width='30'
                        height='30'
                        alt='Replace This Later'
                    ></img>
                }
                id='basic-nav-dropdown'
            >
                {children}
            </NavDropdown>
        </div>
    );
}

export default UserDropdown;
