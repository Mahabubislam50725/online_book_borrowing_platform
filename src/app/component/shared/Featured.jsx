import { getBooks } from '@/lib/data';
import FeaturedSlider from './FeaturedSlider';

const FeaturedSection = async () => {
    const books = await getBooks();
    return (
        <section className="bg-blue-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">Featured Books</h2>
                <p className="text-center text-gray-500 mb-10">Handpicked books just for you</p>
                <FeaturedSlider books={books} />
            </div>
        </section>
    );
};

export default FeaturedSection;