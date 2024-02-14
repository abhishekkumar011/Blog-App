import React from "react";

const MyButton = ({
  children,
  type = "button",
  bgColor = "bg-green-700",
  textColor = "text-white",
  classname = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-primary-dark hover:bg-primary duration-300 ${classname} ${bgColor} ${textColor}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
