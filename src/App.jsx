import { useState } from 'react';
import { Nav } from './components/Nav';
import { NewArrivalsSection } from './components/NewArrivalsSection';
import { ShoeDetail } from './components/ShoeDetail';
import { Sidebar } from './components/Sidebar';
import { SHOE_LIST } from './constant';
import { CartItem } from './components/CartItem';
import { Footer } from './components/Footer';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-10">YOUR CART</h2>
        {/* <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
        <CartItem item={SHOE_LIST[3]} /> */}
        <div className="space-y-4">
          {SHOE_LIST.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </Sidebar>
      <Footer />
    </div>
  );
}
