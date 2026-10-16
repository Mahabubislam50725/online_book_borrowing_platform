'use client';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProfilePage = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdate = async (data) => {
        const { error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
        });
        if (error) {
            toast.error("Update failed: " + (error.message || error.statusText));
        } else {
            toast.success("Profile updated successfully!");
            setTimeout(() => router.push('/profile'), 1500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                        ✏️
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-800">Update Profile</h1>
                    <p className="text-gray-400 text-sm mt-1">Change your name or photo</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(handleUpdate)}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        defaultValue={session?.user?.name}
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

                    <input
                        type="url"
                        placeholder="Photo URL"
                        defaultValue={session?.user?.image}
                        {...register("image")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md"
                    >
                        Update Information
                    </button>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default UpdateProfilePage;
