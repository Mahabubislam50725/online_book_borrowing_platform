import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-100 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">
                {/* 404 Number */}
                <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                   Page isn't found.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                </div>

                {/* Decorative Elements */}
                <div className="relative mt-16">
                    <div className="absolute -top-10 left-1/4 w-20 h-20 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -top-4 right-1/4 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>

                    <div className="mx-auto w-40 h-40 flex items-center justify-center rounded-full bg-white shadow-2xl border border-purple-100">
                        <span className="text-6xl">📚</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;