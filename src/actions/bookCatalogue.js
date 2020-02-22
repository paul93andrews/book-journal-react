export const addBook = ({
    id = '',
    title = '',
    author = '',
    year = '',
    image = '',
    description = ','
} = {}) => ({
    type: 'ADD_BOOK',
    book: {
        id,
        title,
        author,
        year,
        image,
        description,
    }
});

export const removeSelectedBook = (id) => ({
    type: 'REMOVE_SELECTED_BOOK',
    id
})

export const removeLatestBook = () => ({
    type: 'REMOVE_LATEST_BOOK'
});

export const addDescription = (description) => ({
    type: 'ADD_DESCRIPTION',
    description
});