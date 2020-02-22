import React from 'react';

import styled from 'styled-components';

import CatalogueBooks from './CatalogueBooks';

const Dashboard = styled.section`

`

const CatalogueDashboard = () => {
    return (
        <Dashboard>
            <h1>Welcome to your collection of books</h1>
            {/* <CatalogueWrapper></CatalogueWrapper> */}
            <CatalogueBooks />
        </Dashboard>
    )
}

export default CatalogueDashboard;