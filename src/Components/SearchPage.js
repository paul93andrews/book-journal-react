import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Search from '../Components/Search';
import ResultsList from '../Components/ResultsList';
import AddDescriptionModal from '../Components/AddDescriptionModal';
import SearchLoadingState from '../Components/SearchLoadingState';

const searchPage = (props) => (
    <div>
        <Search />
        <h1>Search Results</h1>
        { props.loadingStatus === 'loading' ? <SearchLoadingState /> : null }
        {/* <ResultsList /> */}
        { props.loadingStatus !== 'loading' ? <ResultsList /> : null }
        <AddDescriptionModal />
    </div>
);

const mapStateToProps = (state) => {
    return {
        loadingStatus: state.displayChanges[0].loadingStatus,
    }
};

export default connect(mapStateToProps)(searchPage);