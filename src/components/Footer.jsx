import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

export function Footer() {
  const socialIcons = [
    { Icon: FaFacebookF, label: 'Facebook', href: '#' },
    { Icon: FaTwitter, label: 'Twitter', href: '#' },
    { Icon: FaInstagram, label: 'Instagram', href: '#' },
    { Icon: FaYoutube, label: 'YouTube', href: '#' },
    { Icon: FaTiktok, label: 'TikTok', href: '#' },
  ];

  const links = ['Shop', 'About Us', 'Contact', 'Returns & Shipping'];

  return (
    <footer className="bg-gray-100 dark:bg-[#0e0e0e] text-gray-800 dark:text-gray-100 py-10 px-4 sm:px-6 lg:px-8 mt-16 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
        {/* About Section */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            ShoeFreaks
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Premium sneakers designed for comfort and style. We bring you the
            latest in modern footwear – because your shoes should speak for you.
          </p>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-500">
            © 2025 ShoeFreaks. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col mt-10 sm:mt-0">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {links.map((text) => (
              <li key={text}>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400
                             transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
                             transform hover:scale-105"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col mt-10 md:mt-0">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="bg-white dark:bg-[#1e1e1e] text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800
                           hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white
                           p-3 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
