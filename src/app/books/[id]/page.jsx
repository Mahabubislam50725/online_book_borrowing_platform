import { getBooksDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksDetails = async ({ params }) => {
    const { id } = await params;
    const book = await getBooksDetails(id);

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
            <div className="container mx-auto px-4 max-w-5xl">

                <Link href="/allbooks" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mb-8">
                    ← Back to All Books
                </Link>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                        {/* Image */}
                        <div className="relative w-full md:w-80 h-96 md:h-auto shrink-0">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
                        </div>

                        {/* Content */}
                        <div className="p-10 flex flex-col justify-between flex-1">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1.5 rounded-full shadow">
                                        {book.category}
                                    </span>
                                    <span className={`text-xs font-bold px-4 py-1.5 rounded-full ${book.available_quantity > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                                        {book.available_quantity > 0 ? '✅ Available' : '❌ Unavailable'}
                                    </span>
                                </div>

                                <h1 className="text-4xl font-extrabold text-gray-800 mb-2 leading-tight">{book.title}</h1>
                                <p className="text-gray-400 text-sm mb-6">by <span className="font-semibold text-blue-500">{book.author}</span></p>

                                <div className="h-px bg-gray-100 mb-6" />

                                <p className="text-gray-600 leading-relaxed text-base mb-8">{book.description}</p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-blue-50 rounded-2xl p-4 text-center">
                                        <p className="text-2xl font-extrabold text-blue-600">{book.available_quantity}</p>
                                        <p className="text-xs text-gray-500 mt-1">Copies Available</p>
                                    </div>
                                    <div className="bg-purple-50 rounded-2xl p-4 text-center">
                                        <p className="text-2xl font-extrabold text-purple-600">#7700{book.id}</p>
                                        <p className="text-xs text-gray-500 mt-1">Book ID</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base">
                                📖 Borrow This Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BooksDetails;
