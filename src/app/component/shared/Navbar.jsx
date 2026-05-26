'use client';
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession();

    return (
          <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="BookBorrow Logo"
            width={140}
            height={60}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 font-medium text-gray-700">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/allbooks">All Books</NavLink>
          </li>
          <li>
            <NavLink href="/profile">My Profile</NavLink>
          </li>
        </ul>

        {/* Right Side */}
        {session ? (
            <div className="flex items-center gap-3">
                {session.user.image && (
                    <Image
                        src={session.user.image}
                        alt={session.user.name}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                    />
                )}
                <span className="text-sm font-semibold text-gray-700">{session.user.name}</span>
                <button
                    onClick={() => authClient.signOut()}
                    className="btn btn-sm bg-red-500 text-white border-none hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        ) : (
            <Link
                href="/login"
                className="btn btn-sm bg-purple-500 text-white border-none hover:bg-purple-600"
            >
                Login
            </Link>
        )}

      </div>
    </nav>
    );
};

export default Navbar;