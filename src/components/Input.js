import React from "react";
import { PropTypes } from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};

const variants = {
  underline: {
    black_900: "text-black-900 border-b border-black-900 border-solid",
  },
};

const sizes = {
  xs: "pb-[2px] text-[20px]",
};

export const Input = React.forwardRef(
  ({
    wrapClassName = "",
    className = "",
    name = "",
    placeholder = "",
    type = "text",
    children,
    label = "",
    prefix,
    suffix,
    onChange,
    shape = "",
    size = "xs",
    variant = "underline",
    color = "",
    ...restProps
  }, ref) => {
    return (
      <>
        <label
          className={`${wrapClassName} flex items-center justify-center relative cursor-text text-black-900 capitalize text-[20px] font-medium border-b border-black-900 border-solid ${(shape && shapes[shape]) || ""} ${variants[variant] || ""} ${sizes[size] || ""}}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </label>
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["underline"]),
  color: PropTypes.oneOf(["black_900"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  label: "",
  shape: "",
  size: "xs",
  variant: "underline",
  color: "",
};