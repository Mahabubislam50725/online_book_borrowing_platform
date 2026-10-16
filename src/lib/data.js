import books from '../../public/Book.json';

export const getBooks = async () => {
    return books;
};

export const getBooksDetails = async (id) => {
    return books.find(b => b.id == id);
};
