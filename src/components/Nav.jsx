import { useState } from 'react';
import { Link } from 'react-router-dom';

import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];

export function Nav() {
  // State to track the currently active link
  const [active, setActive] = useState('');

  return (
    // 🧠 flex-wrap allows flex items to wrap onto multiple lines when there's not enough space.
    // Without it (default: nowrap), all items stay on a single line, even if they overflow the container.
    <nav className="flex flex-wrap items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <NikeLogo className="h-20 w-20" />
      </Link>
      {/* Burger button */}
      <button className="hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      {/* 🧠 The <nav> is a flex container with flex-wrap It has 3 direct children: logo, burger button, and menu
              When there's not enough space, elements wrap to the next line. The menu div has w-full, so it always takes a full row below the others */}
      <div className="w-full">
        <ul className="flex flex-col items-center bg-gray-50 text-lg border border-gray-100 rounded-lg p-4">
          {ROUTES.map((route, i) => {
            // 🧠 Check if the current route is active
            const isActive = active === route;
            return (
              <li
                // 🧠 Update the active state on click
                onClick={() => setActive(route)}
                // className={`w-full text-center rounded px-3 py-2 cursor-pointer ${i === 0 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                className={`w-full text-center rounded px-3 py-2 cursor-pointer transition-colors duration-200
                  ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`} // 🧠 Blue if active, gray on hover if not
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
