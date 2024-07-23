import React from 'react';

const sizes = {
    texts: "text-[14px] font-normal",
    textmd: "text-[16px] font-light sm:text-[13px]",
    textlg: "text=[18px] font-light sm:text-[15px]"
};

export const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-black-900 font-sofiapro ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};