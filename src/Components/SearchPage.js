import React from 'react';

import { connect } from 'react-redux';

import Search from '../Components/Search';
import ResultsList from '../Components/ResultsList';
import AddDescriptionModal from '../Components/AddDescriptionModal';
import SearchLoadingState from '../Components/SearchLoadingState';
import SearchErrorModal from '../Components/SearchErrorModal';

const searchPage = (props) => (
    <div>
        <Search />
        <h1 className={
            props.searchErrorModal === 'display' ? 
            `blurComponent` : ''} 
        >
        Search Results
        </h1>
        { props.loadingStatus === 'loading' 
        ? <SearchLoadingState /> 
        : <ResultsList /> }
        { props.searchErrorModal === 'display' 
        ? <SearchErrorModal />
        :
        '' }
        { props.bookCatalogue.length > 0 ? <AddDescriptionModal /> : '' }
    </div>
);

const mapStateToProps = (state) => {
    return {
        loadingStatus: state.displayChanges[0].loadingStatus,
        bookCatalogue: state.bookCatalogue,
        searchErrorModal: state.displayChanges[0].searchErrorModal,
    }
};

export default connect(mapStateToProps)(searchPage);