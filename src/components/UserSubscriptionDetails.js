import React from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

export default function UserSubscriptionDetails({
  subscriptionPrice,
  getStartedText = "Get started here",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${
        props.className
      } flex flex-col items-start justify-center w-[32%] md:w-full gap-5 px-3.5 py-2.5 bg-white-a700 rounded`}
    >
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="h-[62px] w-[58px] bg-gray-300" />
        <Text as="p" className="w-[90%] font-normal leading-[135%]">
          <span className="text-black-900">Get your lifetime health plan for&nbsp;</span>
          <span className="font-bold text-black-900">{subscriptionPrice}/month</span>
          <span className="text-black-900">&nbsp;or&nbsp;</span>
          <span className="font-bold text-black-900">₹9999/year</span>
        </Text>
      </div>
      <Heading size="headingxs" as="h6" className="font-bold underline">
        {getStartedText}
      </Heading>
    </div>
  );
}
