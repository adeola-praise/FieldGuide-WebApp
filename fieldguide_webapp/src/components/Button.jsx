import React from "react";
import style from "../style";

const Button = ({ styles, content }) => {
  return (
    <button
      type="button"
      className={`bg-[#1A232D] font-poppins font-medium text-[16px] text-white  ${styles} outline-none rounded-[3px] w-[175px] h-[44px] ${style.flexCenter}`}
    >
      {content}
    </button>
  );
};

export default Button;
