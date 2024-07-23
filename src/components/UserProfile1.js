import React from "react";
import { Heading } from "./Heading";

export default function UserProfile1({ userPrice, ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-start w-full gap-3.5`}>
      <div className="mb-3.5 h-[50px] w-[50px] rounded-[24px] bg-gray-400" />
      <Heading size="headingxs" as="h6" className="self-end font-interTight">
        <span className="font-sofiapro font-normal text-black-900 line-through">$4999</span>
        <span>&nbsp;</span>
        <span className="font-sofiapro font-bold text-black-900">$999</span>
      </Heading>
    </div>
  );
}