import { TbShoppingBag } from 'react-icons/tb';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  // State to track the currently active link
  const [active, setActive] = useState('');

  return (
    // 🧠 flex-wrap allows flex items to wrap onto multiple lines when there's not enough space.
    // Without it (default: nowrap), all items stay on a single line, even if they overflow the container.
    <nav className="z-10 relative flex flex-wrap items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </Link>
      {/* Burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      {/* 🧠 The <nav> is a flex container with flex-wrap It has 3 direct children: logo, burger button, and menu
              When there's not enough space, elements wrap to the next line. The menu div has w-full, so it always takes a full row below the others */}
      <div
        className={`${!isMobileMenuShown && 'hidden'} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row items-center bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4 lg:dark:text-white">
          {ROUTES.map((route, i) => {
            // 🧠 Check if the current route is active
            const isActive = active === route;
            return (
              <li
                // 🧠 Update the active state on click
                onClick={() => setActive(route)}
                // className={`w-full text-center rounded px-3 py-2 cursor-pointer ${i === 0 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                className={`w-full text-center rounded px-3 py-2 cursor-pointer transition-all duration-300 ease-in-out transform will-change-transform ${(i == 3 || i == 4) && 'lg:text-white'}
                  ${
                    isActive
                      ? 'text-blue-500 lg:bg-transparent lg:text-blue-500 active-link'
                      : 'hover:bg-blue-500 hover:text-white hover:scale-105 lg:hover:bg-transparent lg:hover:scale-105 lg:hover:text-blue-600'
                  }`} // 🧠 Blue if active, gray on hover if not
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart button */}
      {/* 🧠 'fixed' positions the element relative to the viewport, so 'bottom-4' and 'left-4' are measured from the bottom-left corner of the screen (not any parent),but becomes static (normal flow) on large screens (lg:static) */}
      <div
        onClick={onClickShoppingBtn}
        className="fixed bottom-4 left-4 lg:static lg:mr-8 btn-press-anim"
      >
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer hover:text-red-600 transition-colors">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
