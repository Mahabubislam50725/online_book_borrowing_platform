import { getBooks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedSection = async () => {
    const books = await getBooks();
    const featuredBooks = books.slice(0, 4);
    return (
        <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Featured Books</h2>
                <p className="text-center text-gray-500 mb-10">Handpicked books just for you</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredBooks.map((book) => (
                        <div key={book.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={book.image_url}
                                    alt={book.title}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">{book.category}</span>
                            </div>

                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{book.author}</p>
                                <Link
                                    href={`/books/${book.id}`}
                                    className="mt-auto text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded-xl transition-colors duration-200"
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

export default FeaturedSection;