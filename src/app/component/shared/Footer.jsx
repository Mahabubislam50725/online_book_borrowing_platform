import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            📚 BookBorrow
          </h2>
          <p>
            Your online library for borrowing books and exploring new
            knowledge anytime, anywhere.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/allbooks">All Books</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p>Email: support@bookborrow.com</p>
          <p>Phone: +880 1700-000000</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} BookBorrow. All Rights Reserved.
      </div>
    </footer>
    );
};

export default Footer;