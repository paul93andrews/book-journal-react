import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import styled from 'styled-components';

import CatalogueBooks from './CatalogueBooks';
import AddDescriptionModal from '../Components/AddDescriptionModal';
import { trackCurrentPage } from '../actions/displayChanges';

const CatalogueDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trackCurrentPage('cataloguePage'));
    }, [])

    const modalDisplay = useSelector(state => state.displayChanges[0].descriptionModal);

    const determineOverlayBlurClass = () => {
        if (modalDisplay === 'show') {
            return 'blurComponent';
        } else {
            return '';
        }
    }

    return (
        <Dashboard>
            <h1 className={determineOverlayBlurClass()}>Welcome to your collection of books</h1>
            <CatalogueBooks/>
            <AddDescriptionModal />
        </Dashboard>
    )
}

const Dashboard = styled.section`
    @media (min-width: 860px) {
        width: 63%;
    }
    @media (max-width: 860px) {
        position: relative;
    }
    h1 {
        font-size: 2rem;
        text-align: center;
        padding: 0 7.5px;
    }
`

export default CatalogueDashboard;