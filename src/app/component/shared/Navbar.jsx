import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import NavLink from "./NavLink";

const Navbar = () => {
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

        {/* Login Button */}
        <Link
          href="/login"
          className="btn btn-sm bg-purple-500 text-white border-none hover:bg-purple-600"
        >
          Login
        </Link>

      </div>
    </nav>
    );
};

export default Navbar;