import React, { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as regBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';

function FavoriteButton(props) {
    //props: status; toggles bookmark
    const status = props.status;
    const [fav, setFav] = useState(!status);

    const handleUnfavorite = () => setFav(false);
    const handleFav = () => setFav(true);

    if (fav) {
        return (
            <ToggleButton
                value='favorite'
                onClick={handleUnfavorite}
                style={{ backgroundColor: '#F8F9FA', border: '#F8F9FA' }}
                id='toggle-check'
                type='checkbox'
                checked={true}
            >
                <FontAwesomeIcon
                    icon={regBookmark}
                    style={{ color: 'black' }}
                />
            </ToggleButton>
        );
    } else {
        return (
            <ToggleButton
                value='noFavorite'
                onClick={handleFav}
                style={{ backgroundColor: '#F8F9FA', border: '#F8F9FA' }}
                id='toggle-check'
                type='checkbox'
                checked={false}
            >
                <FontAwesomeIcon
                    icon={solidBookmark}
                    style={{ color: 'black' }}
                />
            </ToggleButton>
        );
    }
}

export default FavoriteButton;
