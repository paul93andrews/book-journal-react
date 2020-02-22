import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Qs from 'qs';

import { addSearchResult } from '../actions/searchResults';
import { resetSearchResult } from '../actions/searchResults';
import { hideDescriptionModal } from '../actions/displayChanges';


class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            searchRequest: '',
        }
    }

    componentWillUnmount = () => {
        return this.props.searchResults.length === 0 
        ? null 
        : 
        this.props.resetSearchResult(); 
    }

    fetchBooks = (input) => {
        axios({
            method: 'GET',
            url: 'https://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: "https://www.goodreads.com/search.xml",
                params: {
                    'key': "6HS1l3zTJ33brmaSlc0OPw",
                    'q': input
                },
                xmlToJSON: true,
                useCache: false
            }
        }).then((res) => {
            const data = res.data.GoodreadsResponse.search.results.work
            this.props.addSearchResult({ data })
        }).catch((error) => {
            alert("No results");
            console.log(error);
        })
    }

    onSearchChange = (e) => {
        const searchRequest = e.target.value;
        this.setState(() => ({ searchRequest }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.fetchBooks(this.state.searchRequest);
        this.setState(() => ({ searchRequest: '' }))
    }

    render() {
        return (
            <form action="" onSubmit={this.onSubmit}>
                <input 
                type="text"
                value={this.state.searchRequest}
                onChange={this.onSearchChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({ searchResults: state.searchResults })
//no need for mapDispatchToProps function here
//the object passed in below sets up the action AND dispatch as props on the component
//connect handles that for us
export default connect(mapStateToProps, { addSearchResult, resetSearchResult, hideDescriptionModal })(Search);