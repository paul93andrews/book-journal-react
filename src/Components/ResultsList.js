import React from 'react';
import { connect } from 'react-redux';
import ResultListItem from './ResultsListItem';
import styled from 'styled-components';

const ResultsList = (props) => (
    <ResultListSection>
        {props.searchResults.map(result =>
            <ResultListItem 
            key={result.id.$t} 
            {...result} 
            addBook={props.addBook} 
            />
        )}
    </ResultListSection>
);

const ResultListSection = styled.section`
    max-width: 600px;
    max-height: 60vh;
    overflow-y: scroll;
    padding: 10px 10px 0 0;
    scrollbar-color: #5d6f83 transparent;  /* Firefox */

    &::-webkit-scrollbar { 
        background: transparent;  /* Safari and Chrome */
        
    @media (min-width: 860px) and (max-width: 1000px) {
        padding: 10px 20px 0;
    }
    @media (max-width: 575px) {
        margin-right: 15px;
        margin-left: 15px;
        padding-right: 0;
        width: calc(100% - 30px);
    }

`

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
};

export default connect(mapStateToProps)(ResultsList);
