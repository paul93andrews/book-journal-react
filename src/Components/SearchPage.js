import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Search from '../Components/Search';
import ResultsList from '../Components/ResultsList';
import AddDescriptionModal from '../Components/AddDescriptionModal';
import SearchLoadingState from '../Components/SearchLoadingState';
import SearchErrorModal from '../Components/SearchErrorModal';

const addClassToSearchPageHeading = (errorModalProps, loadingSearchProps) => {
    if (errorModalProps === 'display') {
        return 'blurComponent';
    }
    
    if (loadingSearchProps === 'loading') {
        return 'hide';
    }
}

const searchPage = (props) => (
    <SearchPageContainer>
        <Search />
        <h1 className={
            addClassToSearchPageHeading(props.searchErrorModal, props.loadingStatus)} 
        >
        {props.searchResults.length > 0 ? 'Search Results' : 'Start Searching!'}
        </h1>
        { props.loadingStatus === 'loading' 
        ? <SearchLoadingState /> 
        : ''}
        { props.searchResults.length > 0 && props.loadingStatus !== 'loading'
        ? <ResultsList />
        :
        ''}
        { props.searchErrorModal === 'display' 
        ? <SearchErrorModal />
        :
        '' }
        { props.bookCatalogue.length > 0 ? <AddDescriptionModal /> : '' }
    </SearchPageContainer>
);

const mapStateToProps = (state) => {
    return {
        loadingStatus: state.displayChanges[0].loadingStatus,
        bookCatalogue: state.bookCatalogue,
        searchErrorModal: state.displayChanges[0].searchErrorModal,
        searchResults: state.searchResults,
    }
};

const SearchPageContainer = styled.section`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    min-height: 40vh;
    @media (min-width: 860px) {
        width: 63%;
        height: auto;
    }
    h1 {
        align-self: center;
        width: 100%;
        text-align: center;
        @media (min-width: 860px) {
            align-self: unset;
        }
    }
`;

export default connect(mapStateToProps)(searchPage);