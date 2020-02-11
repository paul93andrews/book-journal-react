import React from 'react';
import { connect } from 'react-redux';
import ResultListItem from './ResultsListItem';

const ResultsList = (props) => (
    <div>
        <h1>Search Results</h1>
        {props.searchResults.map(result => console.log(result))}
        {props.searchResults.map(result => <ResultListItem key={result.id.$t} {...result} />)}
        {/* {props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)} */}
    </div>
);

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
};

export default connect(mapStateToProps)(ResultsList);
