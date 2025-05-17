import { HiArrowUp } from 'react-icons/hi';

export function Card({ item, onClick }) {
  console.log('The Card run');
  const { src, className, title } = item;
  return (
    <div
      // When the card is clicked, we do two things:
      // 1. Smoothly scroll to the top of the page so the user can see the shoe details immediately.
      // 2. Call the onClick(item) function, which updates the currentShoe state in the App component.
      //    This triggers a re-render of the ShoeDetail component with the newly selected shoe.
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClick(item);
      }}
      className={`${className} shadow-md overflow-hidden relative max-w-xl cursor-pointer transform transition hover:scale-105 rounded-md`}
    >
      <div className="p-12">
        <div className="text-2xl font-bold">{title}</div>
        {/* <div className="underline underline-offset-4 font-semibold mt-4">
          SHOW NOW +
        </div> */}
        <div className="mt-4 inline-flex items-center gap-2 font-semibold underline underline-offset-4 text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {/* <HiArrowUp className="text-lg" /> */}
          <HiArrowUp className="text-white bg-blue-600 rounded-full p-1" />
          SHOW NOW +
        </div>
      </div>
      <img
        className="absolute left-[50%] top-1 h-40 w-56 object-contain"
        src={src}
        alt={title}
      />
    </div>
  );
}
