import React, { forwardRef, useId } from "react";

const MyInput = forwardRef(function MyInput(
  { label, type = "text", classname = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full flex flex-col">
      {label && (
        <label className="inline-block mb-2 text-gray-700 text-md" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-md bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default MyInput;
