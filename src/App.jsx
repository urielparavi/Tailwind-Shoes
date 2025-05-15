import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { ShoeDetail } from './components/ShoeDetail';
import { Sidebar } from './components/Sidebar';
import { SHOE_LIST } from './constant';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { HiSun, HiMoon } from 'react-icons/hi2';

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Check if the value in localStorage is the string 'true' and convert it to a boolean
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

    // If dark mode is enabled, add the 'dark' class to the root HTML element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Function to toggle dark mode on and off
  const toggleDarkMode = () => {
    // Toggle the 'dark' class on the root HTML element
    window.document.documentElement.classList.toggle('dark');

    // Save the current dark mode state to localStorage as a string ('true' or 'false')
    localStorage.setItem(
      'isDarkMode',
      window.document.documentElement.classList.contains('dark'),
    );
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="
    bg-sun-50 dark:bg-night-100
    text-sun-700 dark:text-night-600
    hover:bg-sun-100 dark:hover:bg-night-200
    p-3 rounded-full shadow-lg transition-colors duration-300"
        >
          {/* Show Moon icon in light mode – to switch to dark mode */}
          <HiMoon size={20} className="block dark:hidden" />

          {/* Show Sun icon in dark mode – to switch to light mode */}
          <HiSun size={20} className="hidden dark:block" />
        </button>
      </div>
      <Footer />
    </div>
  );
}
