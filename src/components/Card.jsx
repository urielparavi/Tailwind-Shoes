import { HiArrowUp } from 'react-icons/hi';

export function Card({ item }) {
  const { src, className, title } = item;
  return (
    <div
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
        className="absolute left-[50%] top-1 h-40 w-56"
        src={src}
        alt="The card's shoe"
      />
    </div>
  );
}
