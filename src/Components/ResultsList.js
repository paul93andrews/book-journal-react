import React from 'react';
import { connect } from 'react-redux';
import ResultListItem from './ResultsListItem';

const ResultsList = (props) => (
    <div>
        {props.searchResults.map(result =>
            <ResultListItem 
            key={result.id.$t} 
            {...result} 
            addBook={props.addBook} 
            />
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
};

export default connect(mapStateToProps)(ResultsList);
