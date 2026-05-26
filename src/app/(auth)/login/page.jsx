'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const hundleLogin = async (data) => {
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            console.error("Login error:", error);
            toast.error("Login failed: " + error.message);

        }
        if (res) {
            console.log("Login successful:", res);
            toast.success("Login successful!");

        }
    }

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                        📚
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-400 text-sm mt-1">Login to your library account</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(hundleLogin)}>
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        {...register("email", { required: "Email is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        {...register("password", { required: "Password is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-5">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-3 text-gray-400 text-xs">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-3 rounded-xl transition-all duration-200">

                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-500 font-semibold hover:underline">Register</Link>
                </p>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default LoginPage;
