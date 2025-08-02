"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <button
                onClick={() => router.back()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition-colors duration-300"
            >
                Go Back
            </button>
        </div>
    );
}
