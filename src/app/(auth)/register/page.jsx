import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm p-6 border rounded-lg">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Register
                </h1>

                <form  className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="url"
                        name="image"
                        placeholder="Photo URL"
                        className="input input-bordered w-full"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Register
                    </button>

                </form>

                <button
                    className="btn btn-outline w-full mt-4"
                >
                    Register with Google
                </button>

                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage;