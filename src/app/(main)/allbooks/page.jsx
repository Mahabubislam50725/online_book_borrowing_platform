import { getBooks } from '@/lib/data';
import AllBooksClient from '@/app/component/shared/AllBooksClient';

const AllBook = async () => {
    const books = await getBooks();
    return <AllBooksClient books={books} />;
};

export default AllBook;
