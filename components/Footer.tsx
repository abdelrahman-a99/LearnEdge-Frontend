'use client';

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left section */}
                <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} LearnEdge. All rights reserved.</p>

                {/* Right section - links */}
                <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
                    <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
                    <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
                    <a href="/contact" className="hover:text-blue-600">Contact</a>
                </div>
            </div>
        </footer>
    );
}
