import { Card } from './Card';

export function NewArrivalsSection({ items, onClickCard }) {
  console.log('The NewArrivalsSection run');
  return (
    /* bg-no-repeat: ensures the background image appears only once */
    /* bg-contain: scales the image to fit the container without cropping */
    /* tracking-widest: Adds extra letter spacing for a more spaced-out, elegant look */
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center bg-no-repeat bg-contain text-4xl font-extrabold tracking-widest text-gray-800 py-8 px-4 text-center dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
}
