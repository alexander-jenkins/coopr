//Symbol displayed on the right of the CooprNavbar
//Displays a dropdown on click
import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

function UserCircleButton() {
    return (
        <div>
            <Button style={{ backgroundColor: '#F8F9FA', border: '#F8F9FA' }}>
                <FontAwesomeIcon
                    icon={faCircleUser}
                    size='xl'
                    style={{ color: 'black' }}
                />
            </Button>
        </div>
    );
}

export default UserCircleButton;
