import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

const DescriptionLengthTracker = ({ descriptionLength }) => {

    return (
        <LengthTracker>
            <p>{descriptionLength} / 105</p>
            {
                descriptionLength >= 105 
                ? 
                <p>Looks like you've reached the character limit!</p> 
                : null
            }
        </LengthTracker>
    )
}

const LengthTracker = styled.div`

`;

export default DescriptionLengthTracker;