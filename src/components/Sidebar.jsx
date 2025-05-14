export function Sidebar({ children, isOpen, onClickClose }) {
  // return (
  //   <div>
  //     <div
  //       className={`fixed z-50 top-0 right-0 h-full w-full bg-white transform transition duration-300 p-5 md:w-[50%] lg:w-[35%] shadow-lg ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
  //     >
  //       <button
  //         onClick={onClickClose}
  //         className="absolute right-4 top-4 p-2 text-black font-bold"
  //       >
  //         X
  //       </button>
  //       {children}
  //     </div>
  //     {isOpen && (
  //       <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
  //     )}
  //   </div>
  // );
  return (
    <div>
      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full 
          w-full md:w-[50%] lg:w-[35%] 
          bg-white shadow-xl 
          transform transition-transform duration-300 ease-in-out
          p-5 rounded-l-2xl
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-gray-700 hover:text-red-500 transition-colors font-bold text-xl"
        >
          ✕
        </button>

        {/* CONTENT */}
        {/* 
         overflow-y-auto: enables vertical scrolling inside the sidebar only if the content exceeds the container's height
      */}
        <div className="h-full overflow-y-auto pr-2 flex justify-center">
          {children}
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div className="fixed left-0 top-0 z-40 h-full w-full bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300" />
      )}
    </div>
  );
}
