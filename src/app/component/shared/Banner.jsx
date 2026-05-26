import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BannerImage from '@/assets/banner.webp';

const Banner = () => {
    return (
        <div className="bg-gradient-to-br from-[#1a0533] via-[#2d1060] to-[#1a0533] text-white py-20 px-6 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-purple-600 opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-80px] left-[-60px] w-[350px] h-[350px] rounded-full bg-indigo-500 opacity-10 blur-3xl pointer-events-none" />

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <span className="inline-block bg-purple-500 bg-opacity-30 border border-purple-400 border-opacity-40 text-purple-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
                        🆕 New Arrivals Available
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-3">
                        Discover Your
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Next Favorite Book
                    </h1>

                    <p className="text-gray-300 text-lg max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
                        Browse thousands of books from different categories and borrow
                        them easily from our online library.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link href="/allbook" className="btn bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none hover:from-purple-600 hover:to-indigo-600 px-8 shadow-lg shadow-purple-900/40">
                            Browse Books →
                        </Link>
                        <Link href="/register" className="btn btn-outline text-white border-white border-opacity-30 hover:bg-indigo-600 hover:bg-opacity-10 hover:border-white px-8">
                            Join Free
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 mt-10 justify-center md:justify-start">
                        {[
                            { value: '12+', label: 'Books' },
                            { value: '3', label: 'Categories' },
                            { value: '500+', label: 'Members' },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-2xl font-bold">{s.value}</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-purple-500 opacity-20 blur-2xl rounded-full scale-110 pointer-events-none" />
                    <Image
                        src={BannerImage}
                        alt="Book Image"
                        width={480}
                        height={380}
                        className="relative z-10 drop-shadow-2xl rounded-xl"
                        priority
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;
