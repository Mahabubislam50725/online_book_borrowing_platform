export const getBooks = async () => {
    const res = await fetch('http://localhost:3000/Book.json');
    const data = await res.json();
    return data;
};

export const getBooksDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/Book.json`);
    const data = await res.json();
    return data.find(b => b.id == id);
};