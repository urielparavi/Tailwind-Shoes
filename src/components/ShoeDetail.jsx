import { Link } from 'react-router-dom';

import { Select } from './Select';
import { QTY, SIZES } from '../constant';

export function ShoeDetail({ shoe }) {
  const { title, price, description, src } = shoe;
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:flex-row-reverse dark:text-white">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#A18CD1] from-10% via-[#FBC2EB] via-50% to-[#8EC5FC] rounded-b-md p-4">
          <img className="animate-float" src={src} alt={title} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">{title}</div>
        <div className="font-medium md:text-xl">{description}</div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">{price} $</div>

          <Select title="QTY" options={QTY} />
          <Select title="SIZE" options={SIZES} />
        </div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button
            className="h-14 w-44 rounded-lg px-6 py-2 text-white font-semibold
             bg-black hover:bg-gray-800 active:bg-gray-700
             dark:bg-blue-950 dark:hover:bg-blue-900 dark:active:bg-blue-800
             shadow-md hover:shadow-lg active:shadow-inner
             transform hover:scale-[1.03] active:scale-[0.97]
             transition-all duration-400 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
          >
            Add to bag
          </button>
          <Link className="text-lg font-bold underline underline-offset-4">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
