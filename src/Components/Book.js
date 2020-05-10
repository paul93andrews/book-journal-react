import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startRemoveSelectedBook } from '../actions/bookCatalogue';
import { displayDescriptionModal } from '../actions/displayChanges';
import { displaySelectedBook } from '../actions/displayChanges';

import styled from 'styled-components';

const Book = ({ id, image, title, author, year, description }) => {
    const dispatch = useDispatch();

    const removeBook = () => {
        dispatch(startRemoveSelectedBook(id));
    }

    const openModal = () => {
        dispatch((displaySelectedBook(id, title, author, year, description)));
        dispatch(displayDescriptionModal('show'));
    }

    return (
        <BookItem>
            <div className="img" >
                <img src={image} alt=""/>
            </div>
            <div className="description" >
                <h4><span className="category">Title: </span>{title}</h4>
                <h5><span className="category">Author: </span>{author}</h5>
                <p><span className="category">Year: </span>{year}</p>
                <p className="user-description">
                    <span className="category">Description: </span>
                    {description}
                </p>
                <div className="button-container">
                    <button onClick={openModal}>Edit</button>
                    <button onClick={removeBook}>Remove</button>
                </div>
            </div>
        </BookItem>
    )
}

const BookItem = styled.article`
    width: 500px;
    height: 310px;
    min-height: 310px;
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    background: white;
    border-radius: 6px;
    transition: box-shadow .2s ease,transform .2s ease,-webkit-transform .2s ease;
    @media (max-width: 560px) {
        width: 96%;
    }
    &:hover,
    &:active {
        transform: translateY(-8px);
        box-shadow: 0 10px 50px rgba(0,0,0,.1);
    }
    .img {
        width: 20%;
        overflow: hidden;
        @media (max-width: 400px) {
            display: none;
        }
        img {
            height: 100%;
            width: auto;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }
    .description {
        width: 80%;
        font-family: 'Prompt', sans-serif;
        padding: 20px 0 10px 15px;
        display: flex;
        flex-direction: column;
        position: relative;
        @media (max-width: 400px) {
            width: 100%;
            padding-right: 5px;
        }
        h4 {
            font-size: 1.25rem;
            margin-bottom: 10px;
            margin-top: 0;
            @media (max-width: 560px) {
                font-size: 1rem;
            }
        }
        h5 {
            margin: 0
        }
        h5,
        p { 
            font-weight: 300;
            font-size: 1rem;
        }
        p {
            margin-top: 5px;
            &.user-description {
                max-height: 120px;
                overflow-y: scroll;
                @media (max-width: 560px) {
                    max-height: 80px;
                }
            }
            &:not(.user-description) {
                margin-bottom: 7px;
                @media (max-width: 400px) {
                    margin-bottom: 0;
                }
            }
        }
        .button-container {
            align-self: flex-end;
            position: absolute;
            right: 10px;
            bottom: 10px;
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
            margin-right: 5px;
            padding: 10px 20px;
            &:hover,
            &:active {
                cursor: pointer;
                box-shadow: 0 5px 25px rgba(0,0,0,.1);
            }
            @media (min-width: 860px) {
                padding: 10px 20px;
            }
        }
        }
    }
`

export default Book;