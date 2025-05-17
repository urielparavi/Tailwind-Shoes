import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { ShoeDetail } from './components/ShoeDetail';
import { Sidebar } from './components/Sidebar';
import { SHOE_LIST } from './constant';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { HiSun, HiMoon } from 'react-icons/hi2';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  console.log('The App run');

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

  const removeFromCart = (productId) => {
    // Create a new copy of the cart items array to avoid mutating state directly
    const updatedCartItems = [...cartItems];

    // Find index of existing item in the cart with the same product ID (ignoring size here)
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    );

    // Removes 1 item from updatedCartItems at the position specified by existingItemIndex
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    // Check that quantity and size are provided
    if (qty && size) {
      // Create a new copy of the cart items array to avoid mutating state directly
      const updatedCartItems = [...cartItems];

      // Find index of existing item in the cart with the same product ID (ignoring size here)
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id,
      );

      // If the product is already in the cart, replace its quantity and size with the new values
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      }
      // Otherwise, add a new item with product, quantity, and size to the cart
      else {
        updatedCartItems.push({ product, qty, size });
      }

      // Update the cart state with the modified array
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        {/* Our Bag */}
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
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
