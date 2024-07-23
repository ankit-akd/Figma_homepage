import React from "react";
import { Text } from "./Text";
import { Heading } from "./Heading";
import { Img } from "./Img";

export default function UserProfile2({
  keyOrgansHealthScore = "18+ Key Organs Health Score",
  overallHealthEvaluation = "Overall Health Evaluation of 79 parameters from blood analysis and advanced AI.", ...props}) {

  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-5`}>
      <div className="flex flex-col items-center rounded-[46px] bg-gray-300_01 p-[30px] sm:p-5">
        <img src="" alt="Image Gallery" className="h-[28px] w-[28px]" />
      </div>
      <div className="mx-2.5 flex flex-col items-center justify-center gap-1.5 self-stretch">
        <Heading size="textxl" as="p" className="capitalize">
          {keyOrgansHealthScore}
        </Heading>
      </div>
      <div className="mx-3 h-[0.38px] self-stretch bg-black_900" />
      <Text size="texts" as="p" className="self-stretch text-center leading-[140%]">
        {overallHealthEvaluation}
      </Text>
    </div>
  );
}
