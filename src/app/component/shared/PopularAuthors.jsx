import { getBooks } from '@/lib/data';
import React from 'react';

const colors = [
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
    'from-green-400 to-green-600',
    'from-orange-400 to-orange-600',
    'from-red-400 to-red-600',
    'from-teal-400 to-teal-600',
    'from-indigo-400 to-indigo-600',
];

const PopularAuthorsSection = async () => {
    const books = await getBooks();
    const authors = [...new Map(books.map(b => [b.author, b])).values()];

    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Popular Authors</h2>
                <p className="text-center text-gray-500 mb-12">Meet the minds behind the books</p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {authors.map((book, i) => (
                        <div key={book.id} className="group bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {book.author.charAt(0)}
                            </div>
                            <h3 className="font-bold text-lg mb-1">{book.author}</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-1">{book.title}</p>
                            <span className="text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 rounded-full shadow-sm">
                                {book.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularAuthorsSection;
