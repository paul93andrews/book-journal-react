import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

const BookItem = styled.article`

`

const Book = (props) => {

    return (
        <BookItem>
            <h4>{props.details.title}</h4>
        </BookItem>
    )
}

export default Book;