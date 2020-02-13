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