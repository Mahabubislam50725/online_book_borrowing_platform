import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm p-6 border rounded-lg">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Login
                </h1>

                <form  className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Login
                    </button>
                </form>

                <button
                    className="btn btn-outline w-full mt-4"
                >
                    Login with Google
                </button>

                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-500">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;