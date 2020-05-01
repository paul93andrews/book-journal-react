import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Qs from 'qs';
import styled from 'styled-components';

import { addSearchResult } from '../actions/searchResults';
import { resetSearchResult } from '../actions/searchResults';
import { hideDescriptionModal, setLoadingState, displaySearchErrorModal } from '../actions/displayChanges';


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
            this.props.setLoadingState('unset');
        }).catch((error) => {
            this.props.displaySearchErrorModal('display');
            this.props.resetSearchResult();
            this.props.setLoadingState('unset');
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
        this.props.setLoadingState('loading');
    }

    render() {
        return (
            <SearchForm action="" onSubmit={this.onSubmit} 
            className={ 
                this.props.displayChanges[0].searchErrorModal === 'display' 
                ? `blurComponent` : '' }>
                <input 
                type="text"
                value={this.state.searchRequest}
                onChange={this.onSearchChange}
                id="searchForm"
                />
                <label htmlFor="searchForm">Search</label>
                <button>Submit</button>
            </SearchForm>
        )
    }
}

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    position: relative;
    text-align: center;
    width: 100%;
    margin-top: 50px;
    @media (min-width: 860px) {
        margin-top: 40px;
    }
    label {
        position: relative;
        transition: 0.3s margin ease-in;
        height: 0;
        width: 0;
        font-family: 'Prompt', sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        left: -162px;
        top: 8px;

        @media (min-width: 860px) {
        }
    }
    input {
        border-radius: 6px;
        border: 1px solid #e4e8eb;
        font-size: 15px;
        box-sizing: border-box;
        width: 170px;
        padding: 8px;
        &:focus,
        &:active {
            border: 1px solid #e75d5b;
            outline: none;
            & + label {
                margin-top: -30px;
                color: #f8598b;
            }
        }
        @media (min-width: 860px) {
        }
    }
    button {
        border-radius: 6px;
        font-family: 'Prompt', sans-serif;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
        background: #f8598b;
        box-shadow: none;
        border: 1px solid transparent;
        transition: box-shadow .2s ease,transform .2s ease, color .2s ease, -webkit-transform .2s ease;
        margin-left: 5px;
        padding: 10px 20px;
        &:hover {
            cursor: pointer;
        }
        @media (min-width: 860px) {
            padding: 10px 20px;
        }
    }
`;

const mapStateToProps = state => ({ 
    searchResults: state.searchResults,
    displayChanges: state.displayChanges,
})
//no need for mapDispatchToProps function here
//the object passed in below sets up the action AND dispatch as props on the component
//connect handles that for us
export default connect(mapStateToProps, { addSearchResult, resetSearchResult, hideDescriptionModal, setLoadingState, displaySearchErrorModal })(Search);