"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const hundleRegister = async (data) => {
        const { name, email, image, password } = data;

        const {data:res,error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: image,
            callbackURL: "http://localhost:3000",
        })
        console.log(res, error);
        if (error) {
            console.error("Registration error:", error);
            toast.error("Registration failed: " + error.message);
          }
        if (res) {
            console.log("Registration successful:", res);
            toast.success("Registration successful! Please check your email to verify your account.");
        }

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                        📖
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-800">Create Account</h1>
                    <p className="text-gray-400 text-sm mt-1">Join our library community</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(hundleRegister)}>


                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    <input
                        type="url"
                        name="image"
                        placeholder="Photo URL"
                        {...register("image")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md"
                    >
                        Register
                    </button>
                </form>

                <div className="flex items-center my-5">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-3 text-gray-400 text-xs">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-3 rounded-xl transition-all duration-200">
                    <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" /><path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.6 39.6 16.3 44 24 44z" /><path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z" /></svg>
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-500 font-semibold hover:underline">Login</Link>
                </p>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default RegisterPage;
