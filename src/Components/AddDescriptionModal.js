import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { hideDescriptionModal } from '../actions/displayChanges';
import { removeLatestBook } from '../actions/bookCatalogue';

const AddDescriptionModal = () => {
    const dispatch = useDispatch();
    const modalDisplay = useSelector(state => state.displayChanges[0].descriptionModal);

    const Wrapper = styled.section`
        
    `

    const hideModal = () => {
        dispatch(hideDescriptionModal('hidden'));
        dispatch(removeLatestBook());
    }

    return (
        <div>
            {modalDisplay === 'show' 
            ? 
            <Wrapper>
                <form action="">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Add Description</button>
                </form>
                <button onClick={hideModal}>Cancel</button>
            </Wrapper>
            :
            null
            }
        </div>
    )
}

export default AddDescriptionModal;