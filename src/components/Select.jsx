import { IoIosArrowDown } from 'react-icons/io';

export function Select({ title, options }) {
  return (
    <div className="relative">
      <select
        // 🟡 defaultValue={''}
        // ✅ Tells React: start with an empty selection (no value selected yet)
        // ✅ Matches the <option value=""> below
        // ✅ Makes sure the placeholder shows up when the component first renders
        //
        // ⚠️ Without this, the first real option (like 41) would be selected by default
        defaultValue={''}
        className="w-24 appearance-none border border-gray-300 bg-white p-4 rounded-md cursor-pointer"
      >
        {/* 
            🟢 <option value="" disabled hidden>

            ✅ Acts as a placeholder (e.g., "SIZE", "QTY")
            ✅ Appears by default before the user picks a real value
            ✅ disabled → prevents it from being selected
            ✅ hidden → hides it from the dropdown menu
            ✅ value="" → allows it to match defaultValue={''} in <select>

            🧠 This option is NOT meant to be submitted — just to guide the user visually
*/}
        {/* The placeholder option is used to display a prompt (title) but is not selectable. */}
        {/* - `disabled`: prevents selection. */}
        {/* - `hidden`: hides it from the options list after a selection is made. */}
        {/* This ensures it only serves as a prompt before any actual selection is made. */}
        <option value="" disabled hidden>
          {title}
        </option>
        {/*
            Why should we use `value` inside <option>?

            ✅ Ensures the selected value is submitted with a form
            ✅ Works reliably with React state and onChange handlers
            ✅ Lets you separate what's displayed from what’s actually sent or saved
            ✅ Makes the code more explicit and predictable

            ⚠️ If you omit `value`, the browser may use the inner text,
              but it’s not reliable or flexible — especially in dynamic apps.

            ❌ Not related to SEO at all — search engines don’t interact with <select> inputs. 
   */}
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      {/*
    This icon is positioned absolutely, which can block clicks on the <select>.
    To fix that, we use pointer-events-none so clicks pass through to the select.
    This ensures the user can still interact with the dropdown as expected.
  */}
      <div className="absolute inset-y-0 right-0 flex-center pr-3 pointer-events-none">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
