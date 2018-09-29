import React from 'react';
import PropTypes from 'prop-types';

const Card = ({image}) => {
    const {index, name, test} = image;
    return (
        <div id={`card-${index}`} >
            <img src={test} />
            <p>{name}</p>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.object.isRequired
}

export default Card;
