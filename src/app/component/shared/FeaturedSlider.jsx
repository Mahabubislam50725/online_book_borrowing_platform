'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedSlider = ({ books }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}
            className="pb-10"
        >
            {books.map((book) => (
                <SwiperSlide key={book.id}>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                        <div className="relative h-56 w-full">
                            <Image src={book.image_url} alt={book.title} fill className="object-cover" />
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
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FeaturedSlider;
