import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
 

const DescriptionLengthTracker = ({ descriptionLength }) => {


    const classNameAddedToTrackerDiv = descriptionLength >= 105 ? 'limit-message-container' : '';

    return (
        <LengthTracker className={classNameAddedToTrackerDiv}>
            {
                descriptionLength >= 105 
                ? 
                <p className="limit-message">Looks like you've reached the character limit!</p> 
                : null
            }
            <p>{descriptionLength} / 105</p>
        </LengthTracker>
    )
}

const LengthTracker = styled.div`
    display: flex;
    justify-content: flex-end;
    &.limit-message-container {
        justify-content: space-between;
        @media (max-width: 650px) {
            flex-direction: column;
            align-items: center;
            .limit-message {
                text-align: center;
            }
            p:not(.limit-message) {
                margin: 0;
            }
        }
    }
    .limit-message {
        text-transform: uppercase;
        color: #f8598b;
        align-self: center;
        text-transform: uppercase;
        color: #f8598b;
        font-weight: 600;
        font-size: 14px;
    }
    p {
        font-family: 'Prompt', sans-serif;
    }
`;

export default DescriptionLengthTracker;