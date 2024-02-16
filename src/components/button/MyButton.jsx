import React from "react";

const MyButton = ({
  children,
  type = "button",
  bgColor = "bg-primary-dark",
  textColor = "text-white",
  classname = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg hover:bg-primary duration-300 ${classname} ${bgColor} ${textColor}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
