import React, { useEffect } from 'react';

import Search from '../Components/Search';
import ResultsList from '../Components/ResultsList';
import AddDescriptionModal from '../Components/AddDescriptionModal';

const searchPage = () => {
    return <div>
        <Search />
        <ResultsList />
        <AddDescriptionModal />
    </div>
};

export default searchPage