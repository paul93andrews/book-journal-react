import React from 'react';

const ResultListItem = ({ best_book, original_publication_year }) => {
    return (
        <div>
            {/* <h3>{description}</h3> */}
            {/* <NavLink to={`edit/${id}`} activeClassName="is-active" exact='true'>
                <h3>{description}</h3>
            </NavLink>
            <p>{amount}</p>
            <p>{createdAt}</p> */}
            <p>Title: {best_book.title}</p>
            <p>Author: {best_book.author.name}</p>
            <p>Year: {original_publication_year.$t}</p>
        </div>
    )
}

export default ResultListItem;