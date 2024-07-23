import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[22px]"
};

const variants = {
    outline:{
        gray_900: "border-gray-900 border border-solid text-gray-900",
        black_900: "border-black-900 border border-solid text-black-900"
    },
    fill:{
        gray_500: "bg-gray-500",
        gray_300_01: "bg-gray-300_01",
        gray_900: "bg-gray-900 text-white-a700"
    }
};

const sizes = {
    xs:"h-[36px]",
    lg:"h-[66px] px-[22px]",
    sm:"h-[36px] px-[18px] text-[16px]",
    md:"h-[46px] px-[30px] text-[18px]"
}

export default function Button({children, className="", leftIcon, rightIcon,shape, variant="fill",size="md",color="", ...restProps})  {
    return(
        <button className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`} {...restProps}>
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    )
}

Button.propTypes = {
  className:PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs","lg","sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_500", "gray_300_01", "black_900", "gray_500"])
}