import React from "react";

const sizes = {
  textxs: "text-[12px] font-medium",
  textxl: "text-[20px] font-medium sm:text-[17px]",
  text2xl: "text-[22px] font-medium sm:text-[18px]",
  text3xl: "text-[24px] font-medium md:text-[22px] sm:text-[20px]",
  text4xl: "text-[26px] font-medium md:text-[24px] sm:text-[22px]",
  text5xl: "text-[30px] font-medium md:text-[28px] sm:text-[25px]",
  text6xl: "text-[36px] font-medium md:text-[34px] sm:text-[30px]",
  text7xl: "text-[75px] font-medium md:text-[48px]",
  headingxs: "text-[18px] font-semibold sm:text-[15px]",
  headings: "text-[36px] font-semibold md:text-[34px] sm:text-[30px]",
};

export const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-sans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};
