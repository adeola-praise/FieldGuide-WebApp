import React from "react";
import style from "../style";

const GetStarted = ({ styles }) => {
  return (
    <button
      type="button"
      className={`bg-secondary font-poppins font-medium text-[16px] text-white outline-none ${styles} rounded-[3px] w-[135px] h-[44px] ${style.flexCenter}`}
    >
      Get Started
    </button>
  );
};

export default GetStarted;
