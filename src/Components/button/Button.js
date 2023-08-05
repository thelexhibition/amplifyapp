import React from "react";
import "./button.css";

const Button = ({ value, variant, size, text, className }) => {
  return (
    <button className={className}>
      {value}
      {value.includes("action filter") && <span>{text}</span>}
    </button>
  );
};

export default Button;
