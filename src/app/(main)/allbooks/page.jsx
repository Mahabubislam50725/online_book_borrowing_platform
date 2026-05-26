import { getBooks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllBook = async () => {
    const books = await getBooks();
    return (
        <section className="bg-blue-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-2">All Books</h1>
                <p className="text-center text-gray-500 mb-10">Total books: {books.length}</p>

                <div className="flex flex-col gap-4">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-row items-center">
                            <div className="relative h-36 w-32 shrink-0">
                                <Image
                                    src={book.image_url}
                                    alt={book.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 flex flex-1 items-center gap-4">
                                <span className="text-gray-400 text-sm w-6">{book.id}</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl line-clamp-1">{book.title}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2">{book.description}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full whitespace-nowrap">{book.category}</span>
                                <Link
                                    href={`/books/${book.id}`}
                                    className="text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-200 whitespace-nowrap"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllBook;