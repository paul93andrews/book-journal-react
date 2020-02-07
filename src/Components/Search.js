import React from 'react';
import axios from 'axios';
import Qs from 'qs';


class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            searchRequest: '',
        }
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

        console.log(res);

        }).catch((error) => {
            alert("No results");
        })
    }

    onSearchChange = (e) => {
        const searchRequest = e.target.value;
        this.setState(() => ({ searchRequest }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.fetchBooks(this.state.searchRequest);
    }

    render() {
        return (
            <form action="" onSubmit={this.onSubmit}>
                <input 
                type="text"
                onChange={this.onSearchChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default Search;