import { Link } from 'react-router-dom';

import nike1 from '../assets/n1-min.png';

export function ShoeDetail() {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:flex-row-reverse">
      {/* Shoe image */}
      <div className="flex-1">
        <div className="bg-gradient-to-br from-[#A18CD1] from-10% via-[#FBC2EB] via-50% to-[#8EC5FC] rounded">
          <img src={nike1} alt="The red nike shoe" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe text details */}
        <div className="text-5xl font-black md:text-9xl">Nike Air max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="text-3xl font-extrabold md:text-6xl">100 $</div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-800 active:bg-gray-700 rounded-lg">
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
