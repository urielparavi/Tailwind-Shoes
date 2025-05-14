export function CartItem({ item }) {
  const { title, description, price, src } = item;
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 hover:bg-[#f7ffe5] cursor-pointer">
      {/* 
      /* object-fit: contain ensures the entire image fits inside the container
      without distortion. It preserves the aspect ratio and may leave empty
      space (letterboxing) if needed.
*/}
      <img
        className="h-24 w-24 object-contain rounded-xl border border-gray-100"
        src={src}
        alt={title}
      />
      <div className="flex-1 space-y-1">
        <div className="text-lg font-semibold text-gray-800">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      {/* 
        Prevents the price and currency symbol from wrapping to separate lines,
        ensuring they always appear together as a single unit (e.g. "120$").
        This improves visual consistency, especially on smaller screens.
      */}
      <div className="text-lg font-bold text-green-600 whitespace-nowrap">
        ${price}
      </div>
    </div>
  );
}
