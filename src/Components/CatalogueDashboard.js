import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import styled from 'styled-components';

import CatalogueBooks from './CatalogueBooks';
import AddDescriptionModal from '../Components/AddDescriptionModal';
import { trackCurrentPage } from '../actions/displayChanges';

const CatalogueDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trackCurrentPage('cataloguePage'));
    }, [])

    return (
        <Dashboard>
            <h1>Welcome to your collection of books</h1>
            <CatalogueBooks />
            <AddDescriptionModal />
        </Dashboard>
    )
}

const Dashboard = styled.section`
    @media (min-width: 860px) {
        width: 63%;
    }
    h1 {
        font-size: 2rem;
        text-align: center;
    }
`

export default CatalogueDashboard;