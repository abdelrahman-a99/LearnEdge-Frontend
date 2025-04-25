'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
                LearnEdge
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-6 text-gray-700">
                <Link href="/">Home</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/about">About</Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-4">
                <Link href="/login" className="text-sm text-gray-600 hover:text-blue-600">
                    Login
                </Link>
                <Link
                    href="/register"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}
