import { getBooks } from '@/lib/data';
import Marquee from 'react-fast-marquee';


const MarqueeSection = async () => {
    const books = await getBooks();
    return (
        <div className="w-full flex items-center justify-center p-4 bg-slate-200">
            <h1 className="text-sm font-bold bg-red-500 text-white px-4 py-2 rounded-lg whitespace-nowrap">🎉 Library Updates</h1>
            <Marquee pauseOnHover={true} speed={100} className="text-xl font-semibold mx-5">
                📚 New Arrivals Books :
                {books.map(book => (
                    <p className="text-xl font-semibold mx-5" key={book.id}>{book.title} </p>
                ))}
                ⭐ Special Discount on Memberships |
                🎉 Join Now and Borrow Books for Free |
                🚀 Unlimited Access to Popular Books |
                ❤️ Read Anytime, Anywhere |
            </Marquee>
        </div>
    );
};

export default MarqueeSection;