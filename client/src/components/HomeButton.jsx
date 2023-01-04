import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function HomeButton() {
    return (
        <div>
            <Button style={{ backgroundColor: '#F8F9FA', border: '#F8F9FA' }}>
                <FontAwesomeIcon
                    icon={faHome}
                    size='lg'
                    style={{ color: 'black' }}
                />
            </Button>
        </div>
    );
}

export default HomeButton;
