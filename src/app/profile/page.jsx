'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <div className="text-center">
                    <p className="text-gray-500 mb-4">You are not logged in.</p>
                    <Link href="/login" className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">Login</Link>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

                    {/* Cover */}
                    <div className="h-36 bg-gradient-to-r from-blue-400 to-purple-500" />

                    <div className="flex flex-col items-center -mt-16 px-8 pb-8">
                        <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-blue-100">
                            {user.image ? (
                                <Image src={user.image} alt={user.name} width={112} height={112} className="object-cover w-full h-full" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-blue-500">
                                    {user.name?.charAt(0)}
                                </div>
                            )}
                        </div>

                        <h1 className="text-2xl font-extrabold text-gray-800 mt-4">{user.name}</h1>
                        <p className="text-gray-400 text-sm mt-1">{user.email}</p>

                        <div className="h-px w-full bg-gray-100 my-6" />

                        <div className="grid grid-cols-2 gap-4 w-full mb-6">
                            <div className="bg-blue-50 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-extrabold text-blue-600">0</p>
                                <p className="text-xs text-gray-500 mt-1">Books Borrowed</p>
                            </div>
                            <div className="bg-purple-50 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-extrabold text-purple-600">0</p>
                                <p className="text-xs text-gray-500 mt-1">Books Returned</p>
                            </div>
                        </div>

                        <Link
                            href="/"
                            className="w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-2xl transition-all duration-200 shadow-md mb-3 block"
                        >
                            🏠 Go to Home
                        </Link>
                        <button
                            onClick={() => authClient.signOut().then(() => router.push('/login'))}
                            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-2xl transition-all duration-200 shadow-md"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
