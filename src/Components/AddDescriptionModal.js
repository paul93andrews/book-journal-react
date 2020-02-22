import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { hideDescriptionModal } from '../actions/displayChanges';
import { removeLatestBook } from '../actions/bookCatalogue';
import { addDescription } from '../actions/bookCatalogue';

const Wrapper = styled.section`
    
`

const AddDescriptionModal = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();
    const modalDisplay = useSelector(state => state.displayChanges[0].descriptionModal);


    const changeDescription = (e) => {
        setValue(e.target.value);
    }

    const submitDescription = (e) => {
        e.preventDefault();
        dispatch(addDescription(value));
        setValue('');
        dispatch(hideDescriptionModal('hidden'));
    }

    const hideModal = () => {
        dispatch(hideDescriptionModal('hidden'));
        dispatch(removeLatestBook());
    }

    return (
        <div>
            {
            modalDisplay === 'show' 
            ? 
            <Wrapper>
                <form action="" onSubmit={submitDescription}>
                    <textarea name="" id="" value={value} onChange={changeDescription}></textarea>
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