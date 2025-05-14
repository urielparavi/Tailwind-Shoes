import { CiTrash } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';
import { Select } from './Select';
import { SIZES, QTY } from '../constant';

export function CartItem({ item }) {
  const { src, title, description, price } = item;

  return (
    <div className="cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-[#f7ffe5] rounded-2xl p-4 space-y-4">
      {/* Top Section: Image, Info, Price */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* 
          object-fit: contain ensures the entire image fits inside the container
          without distortion. It preserves the aspect ratio and may leave empty
          space (letterboxing) if needed.
        */}
        <img
          className="h-28 w-28 object-contain rounded-xl border border-gray-200 bg-gray-50"
          src={src}
          alt={title}
        />

        <div className="flex-1 space-y-1">
          <div className="text-lg font-semibold text-gray-800">{title}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>

        {/* 
          Prevents the price and currency symbol from wrapping to separate lines,
          ensuring they always appear together as a single unit (e.g. "$120").
          This improves visual consistency, especially on smaller screens.
        */}
        <div className="text-lg font-bold text-green-600 whitespace-nowrap flex items-center gap-1">
          <FaDollarSign className="text-green-600" />
          {price}
        </div>
      </div>

      {/* Bottom Section: Selects and Delete */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex gap-6">
          <div>
            <div className="text-sm font-bold text-gray-700 mb-1">SIZE</div>
            <Select title="" options={SIZES} />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 mb-1">QTY</div>
            <Select title="" options={QTY} />
          </div>
        </div>
        <button className="self-start md:self-center hover:text-red-600 transition-colors">
          <CiTrash size={24} />
        </button>
      </div>
    </div>
  );
}
