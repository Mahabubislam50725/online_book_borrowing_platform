'use client';
import { toast, ToastContainer } from 'react-toastify';

const BorrowButton = ({ available, bookId, bookTitle }) => {
    const handleBorrow = async () => {
        if (available <= 0) {
            toast.error("Sorry, this book is currently unavailable!");
            return;
        }
        const res = await fetch('/api/borrow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bookId, bookTitle }),
        });
        const data = await res.json();
        if (!res.ok) {
            toast.error(data.error === "Already borrowed" ? "You already borrowed this book!" : "Something went wrong!");
        } else {
            toast.success("Book borrowed successfully! 🎉");
        }
    };

    return (
        <>
            <button
                onClick={handleBorrow}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
                📖 Borrow This Book
            </button>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default BorrowButton;
