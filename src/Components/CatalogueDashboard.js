import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import styled from 'styled-components';

import CatalogueBooks from './CatalogueBooks';
import AddDescriptionModal from '../Components/AddDescriptionModal';
import { trackCurrentPage } from '../actions/displayChanges';

const Dashboard = styled.section`

`

const CatalogueDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trackCurrentPage('cataloguePage'));
    }, [])

    return (
        <Dashboard>
            <h1>Welcome to your collection of books</h1>
            {/* <CatalogueWrapper></CatalogueWrapper> */}
            <CatalogueBooks />
            <AddDescriptionModal />
        </Dashboard>
    )
}

export default CatalogueDashboard;