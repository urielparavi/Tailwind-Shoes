// components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-gray-800 py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">ShoeFreaks</h3>
          <p className="text-sm text-white">
            Premium sneakers designed for comfort and style. We bring you the
            latest in modern footwear – because your shoes should speak for you.
          </p>
          <p className="mt-4 text-sm text-white">
            © 2025 ShoeFreaks. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Returns & Shipping
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-500 hover:text-white p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-500 hover:text-white p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-500 hover:text-white p-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
