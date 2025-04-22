import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full px-10 py-6 border-b border-neutral-200 flex items-center ">
      {/* Logo Section */}
      <div className="flex items-center gap-4 mr-10">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="h-14 w-auto object-contain"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-16 text-sm tracking-wider uppercase font-light">
        <li>
          <Link
            to="/"
            className="hover:text-[#1bdddd] transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-[#1bdddd] transition-colors duration-300"
          >
            Colecciones
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-[#1bdddd] transition-colors duration-300"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="hover:text-[#1bdddd] transition-colors duration-300"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
