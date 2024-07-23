import React from "react";
import { Heading } from "./Heading";
import Button from "./Button";
import { Img } from "./Img";
import { Text } from "./Text";

export default function UserProfile3({
  userName = "Rashmi J on Oct 25, 2023",
  userDescription = "Lorem Ipsum Dolar Amet",
  readMoreButton = "Read More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-5`}>
      <div className="h-[326px] self-stretch rounded-[24px] bg-gray-300 02" />
      <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
        <Text as="p">{userName}</Text>
        <Heading size="text3xl" as="p">
          {userDescription}
        </Heading>
      </div>
      <Button
        shape="round"
        rightIcon={
          <img
            src=""
            alt="Arrow 2"
            className="h-px w-[12px]"
          />
        }
        className="min-w-[150px] gap-2.5 font-medium"
      >
        {readMoreButton}
      </Button>
    </div>
  );
}
