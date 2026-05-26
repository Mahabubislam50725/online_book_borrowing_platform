import { getBooks } from '@/lib/data';
import React from 'react';

const LibraryStatisticsSection = async () => {
    const books = await getBooks();

    const totalBooks = books.length;
    const totalAuthors = new Set(books.map(b => b.author)).size;
    const totalCategories = new Set(books.map(b => b.category)).size;
    const totalAvailable = books.reduce((sum, b) => sum + b.available_quantity, 0);

    const stats = [
        { label: 'Total Books', value: totalBooks, icon: '📚', color: 'from-blue-400 to-blue-600' },
        { label: 'Total Authors', value: totalAuthors, icon: '✍️', color: 'from-purple-400 to-purple-600' },
        { label: 'Categories', value: totalCategories, icon: '🗂️', color: 'from-pink-400 to-pink-600' },
        { label: 'Available Copies', value: totalAvailable, icon: '✅', color: 'from-green-400 to-green-600' },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Library Statistics</h2>
                <p className="text-center text-gray-500 mb-12">A quick glance at our collection</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-3xl p-6 flex flex-col items-center text-center text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
                            <span className="text-4xl mb-3">{stat.icon}</span>
                            <h3 className="text-4xl font-extrabold mb-1">{stat.value}</h3>
                            <p className="text-sm font-medium opacity-90">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LibraryStatisticsSection;
